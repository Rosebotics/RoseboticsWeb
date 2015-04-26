import logging

from google.appengine.api import namespace_manager

import controllers.sites
from models import progress
from models.courses import CourseModel12
from models.models import Student
from models.rosebotics_models import RoseboticsTeam, TeamVisibility,\
  RoseboticsTeamMember, RoseboticsStudent
from google.appengine.ext import ndb
from datetime import datetime


def get_total_progress_for_course(email, course_prefix):
  """ Returns a progess dict for the overall percentage of the course complete and an array of track
      percentages, which is a dictionary of the total progress in the course and the progress of each 
      unit, (in the order they appear in app.yaml) for the given course-prefix. """
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
        units[unit_title] = unit[0]/float(unit[1])
      track_progress.append({'name': course_app_context.get_title(), 'track': track_tasks_completed/float(total_track_tasks), 'units': units})
      course_tasks_completed += track_tasks_completed
      total_course_tasks += total_track_tasks
      logging.info("Lesson progress in %s:  %d of %d tasks completed" % (url_path, track_tasks_completed, total_track_tasks))
    else:
      track = {'name': course_app_context.get_title(), 'track': 0, 'units': {}}
      total_track_tasks = tracker.get_task_total()
      for unit in tracker.get_course_units():
        track['units'][unit.unit_id + ":" + unit.title] = 0
      total_course_tasks += total_track_tasks
      track_progress.append(track)
      logging.info("Student not enrolled in %s, which has %d tasks"  % (url_path, total_track_tasks))
  namespace_manager.set_namespace("")
  return {"course": course_tasks_completed/float(total_course_tasks), "tracks": track_progress}

def get_csv_export_lists(rosebotics_student, team_urlsafe, export_student_name, export_rose_username, data):
  table_data = [[str(datetime.now())]] # UTC?
  header_row = []
  table_data.append(header_row)
  # Student Header
  if export_student_name:
    header_row.append("Full Name")
  if export_rose_username:
    header_row.append("Username")
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
    logging.info(member.email)
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
    for course in data:
      course_progress = get_total_progress_for_course(member.email, course['name'].lower())
      for requested_track in course['tracks']:
        track_data = None
        requested_units = None
        for track in course_progress['tracks']:
          if requested_track['name'] == track['name']:
            track_data = track['units']
            requested_units = requested_track['units']
            break
        if track_data is None:
          continue
        # Sort units
        extract_key = lambda pair:int(pair[0].split(":")[0])
        track_data = sorted(track_data.items(), key=extract_key)
        for unit_id, unit_progress in track_data:
          unit_name = unit_id.split(':')[1]
          if unit_name not in requested_units:
            continue
          table_row.append(unit_progress)
          if is_first_student:
            header_row.append(unit_name)
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
      logging.info("Lesson progress in %s:  %d of %d tasks completed" % (url_path, track_tasks_completed, total_track_tasks))
    else:
      track_progress.append(0)
      total_track_tasks = tracker.get_task_total()
      total_course_tasks += total_track_tasks
      logging.info("Student not enrolled in %s, which has %d tasks"  % (url_path, total_track_tasks))
  namespace_manager.set_namespace("")
  return {"course": course_tasks_completed/float(total_course_tasks), "tracks": track_progress}