import logging

from google.appengine.api import namespace_manager

import controllers.sites
from models import progress
from models.courses import CourseModel12
from models.models import Student
from models.rosebotics_models import TeamVisibility,\
  RoseboticsTeamMember, RoseboticsStudent
from google.appengine.ext import ndb
from datetime import datetime, timedelta

###
#
# TODO for the motivated/looking for a refactoring challenge. 
#
# A LOT of the below code for the get_total_progress is primitively obsessed (http://www.mdswanson.com/blog/2012/05/31/primitive-obsession.html)
#
# For example, the different flags or options in the below function could just always include the information, but in different fields of the object,
# Also the units have a weird title of 0:<TrackName> where the number is the unit number, because the function does not pull them out in the correct
# order. It would be nice not to have to do this. 
#
# This should be changed to Unit, Track, and Course Objects. The nice thing about this
# would be that once you have course objects, settings.py would *just* have to be creating these
# different Course objects, then these would be used instead of all of these crazy dictionaries.
# Also I know the GCourseBuilder has these objects already existing, so maybe these could be used. 
#
# Warning you'll have to update the code in numerous places, teams_api.py, main_handlers.py, etc.
#
###

def get_total_progress_for_course(email, course_prefix, as_percent=True, get_total_tasks=False):
  """ Returns a progess dict for the overall percentage of the course complete and an array of track
      percentages, which is a dictionary of the total progress in the course and the progress of each
      unit, (in the order they appear in app.yaml) for the given course-prefix. 
      as_percent is used to specify if the unit's are expressed in percentage or as number of completed tasks
      with the 'get_total_tasks' flag each unit will have another entry called unitid-total that will be the number of total tasks in the unit """
  track_progress = []
  course_tasks_completed = 0
  total_course_tasks = 0
  all_course_app_contexts = controllers.sites.get_all_courses()
  for course_app_context in all_course_app_contexts:
    url_path = course_app_context.slug
    if not url_path.startswith("/" + course_prefix + "-"):
      continue
    namespace_manager.set_namespace(course_app_context.namespace)
    student = Student.get_by_email(email)
    course = CourseModel12.load(course_app_context)
    tracker = progress.UnitLessonCompletionTracker(course)
    if student:
      lesson_breakdown = tracker.get_task_progress_with_title(student)
      track_tasks_completed = 0
      total_track_tasks = 0
      units = {}
      for unit_title, unit in lesson_breakdown.items():
        track_tasks_completed += unit[0]
        total_track_tasks += unit[1]
        if as_percent:
          units[unit_title] = unit[0]/float(unit[1])
        else:
          units[unit_title] = unit[0]/2
        if get_total_tasks:
          units[unit_title + "-total"] = unit[1]/2
      track_progress.append({'name': course_app_context.get_title(), 'url':url_path, 'track': track_tasks_completed/float(total_track_tasks), 'units': units})
      course_tasks_completed += track_tasks_completed
      total_course_tasks += total_track_tasks
      logging.info("Lesson progress in %s:  %d of %d tasks completed" % (url_path, track_tasks_completed/2, total_track_tasks/2))
    else:
      track = {'name': course_app_context.get_title(), 'track': 0, 'url':url_path, 'units': {}}
      total_track_tasks = tracker.get_task_total()
      for unit in tracker.get_course_units():
        track['units'][unit.unit_id + ":" + unit.title] = 0
      total_course_tasks += total_track_tasks
      track_progress.append(track)
      logging.info("Student not enrolled in %s, which has %d tasks"  % (url_path, total_track_tasks/2))
  namespace_manager.set_namespace("")
  if total_course_tasks == 0:
    logging.warn('WARNING: track %s has 0 total tasks' % url_path)
    total_course_tasks = 1
  return {"course": course_tasks_completed/float(total_course_tasks), "tracks": track_progress}

_tz_offsets = {'UTC':0, 'Pacific':-7, 'Mountain':-6, 'Central':-5, 'Eastern':-4}

def _tz_now(timezone='UTC'):
  offset = _tz_offsets.get(timezone, 0)
  return format(datetime.utcnow() + timedelta(hours=offset), "Exported on %a %b %d %H:%M %Y")

def get_csv_export_lists(rosebotics_student, team_urlsafe, export_student_name, export_rose_username, unit_points, ppu, ppt, export_course_progress, export_track_progress, timezone, data):
  table_data = []
  header_row = []
  table_data.append(header_row)
  # Student Header
  if export_student_name:
    header_row.append("Full Name")
  if export_rose_username:
    header_row.append("Username")
  if timezone:
    header_row.append("Timestamp")
  team = ndb.Key(urlsafe=team_urlsafe).get()
  if team is None:
    return []
  members = RoseboticsTeamMember.query(ancestor=team.key)
  allowed_visibilies = [TeamVisibility.ALL_MEMBERS]
  if team.leader == rosebotics_student.key.string_id():
    allowed_visibilies.append(TeamVisibility.TEAM_LEADER)
  else:
    is_user_not_in_team = True
    for member in members:
      if member.email == rosebotics_student.key.string_id():
        is_user_not_in_team = False
        break
    if is_user_not_in_team:
      return []
  is_first_student = True
  for member in members:
    if member.visibility not in allowed_visibilies:
      continue
    student = RoseboticsStudent.get_by_id(member.email)
    if student is None:
      continue
    table_row = []
    if export_student_name:
      table_row.append(student.name)
    if export_rose_username:
      table_row.append(student.username)
    if timezone:
      table_row.append(_tz_now(timezone))
    for course in data:
      course_progress = get_total_progress_for_course(member.email, course['name'].lower(), as_percent=unit_points, get_total_tasks=True)
      course_added = False
      for requested_track in course['tracks']:
        track_added = False
        track_data = None
        track_progress = None
        requested_units = None
        for track in course_progress['tracks']:
          if requested_track['name'] == track['name']:
            track_progress = track['track']
            track_data = track['units']
            requested_units = requested_track['units']
            break
        if track_data is None:
          continue
        # Sort units
        extract_key = lambda pair:int(pair[0].split(":")[0])
        unit_tuples = sorted(track_data.items(), key=extract_key)
        for unit_id, unit_progress in unit_tuples:
          if unit_id.endswith('-total'):
            continue
          unit_name = unit_id.split(':')[1]
          if unit_name not in requested_units:
            continue
          if export_course_progress and not course_added:
            table_row.append(course_progress['course'])
            if is_first_student:
              header_row.append(course['name'])
            course_added = True
          if export_track_progress and not track_added:
            table_row.append(track_progress)
            if is_first_student:
              header_row.append(requested_track['name'])
            track_added = True
          if unit_points:
            table_row.append(unit_progress * ppu)
            unit_total = ppu
          else:
            table_row.append(unit_progress * ppt)
            unit_total = track_data[unit_id + '-total'] * ppt
          if is_first_student:
            header_row.append(unit_name + " (out of " + str(unit_total) + ")")
    is_first_student = False
    table_data.append(table_row)
  return table_data

def get_progress_for_course(user, course_prefix):
  """ Returns a progess dict for the overall percentage of the course complete and an array of track
      percentages (in the order they appear in app.yaml) for the given course-prefix. """
  track_progress = []
  course_tasks_completed = 0
  total_course_tasks = 0
  all_course_app_contexts = controllers.sites.get_all_courses()
  for course_app_context in all_course_app_contexts:
    url_path = course_app_context.slug
    if not url_path.startswith("/" + course_prefix + "-"):
      continue
    namespace_manager.set_namespace(course_app_context.namespace)
    student = Student.get_by_email(user.email())
    course = CourseModel12.load(course_app_context)
    tracker = progress.UnitLessonCompletionTracker(course)
    if student:
      lesson_breakdown = tracker.get_task_progress(student)
      track_tasks_completed = 0
      total_track_tasks = 0
      for unit_tasks_completed, total_unit_tasks in lesson_breakdown.values():
        track_tasks_completed += unit_tasks_completed
        total_track_tasks += total_unit_tasks
      track_progress.append(track_tasks_completed/float(total_track_tasks))
      course_tasks_completed += track_tasks_completed
      total_course_tasks += total_track_tasks
      logging.info("Lesson progress in %s:  %d of %d tasks completed" % (url_path, track_tasks_completed/2, total_track_tasks/2))
    else:
      track_progress.append(0)
      total_track_tasks = tracker.get_task_total()
      total_course_tasks += total_track_tasks
      logging.info("Student not enrolled in %s, which has %d tasks"  % (url_path, total_track_tasks/2))
  namespace_manager.set_namespace("")
  return {"course": course_tasks_completed/float(total_course_tasks), "tracks": track_progress}
