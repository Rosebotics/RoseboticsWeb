import logging

from google.appengine.api import namespace_manager

import controllers.sites
from models import progress
from models.courses import CourseModel12
from models.models import Student
from models.rosebotics_models import RecentTrack


MOST_RECENT_TRACK_ID = 'most_recent'
# To track the progress of a course, add the slug below 
# (make sure the jinja2 template is expecting the right value)
COURSE_IDS = ['android', 'ios', 'web']

### Helper methods ###
def get_most_recent_course(rosebotics_key):
  """ Returns the single course that was most recent. """
  return RecentTrack.get_by_id(MOST_RECENT_TRACK_ID, parent=rosebotics_key)


def get_recent_tracks(rosebotics_key):
  """ Returns a dictionary of courses with their recent tracks, if there is one.
      Peusdo output: { 'recent_web_track' : RecentTrack(), 'recent_ios_track' : RecentTrack() } 
      So this user has started the Web and iOS Courses and are on those tracks but not Android """
  recent_tracks = {}
  for key in COURSE_IDS:
    track = RecentTrack.get_by_id(key, parent=rosebotics_key)
    if track is not None:
      recent_tracks['recent_' + key + '_track'] = track
  return recent_tracks
  
def set_recent_track(rosebotics_key, track_path):
  """ Sets the track as the most recently visited track """
  track_path = "/" + track_path.split("/", 2)[1]
  track_type = None
  for course_prefix in COURSE_IDS:
    if track_path.startswith("/" + course_prefix + "-"):
      track_type = course_prefix
      break
  if track_type is None:
    logging.error("Unknown track_path: " + track_path)
    return
  track = RecentTrack.get_by_id(track_type, parent=rosebotics_key)
  if track is None:
    track = RecentTrack(id=track_type, parent=rosebotics_key, path=track_path)
    track.put()
  elif track.path != track_path:
    track.path = track_path
    track.put()
  most_recent_track = RecentTrack.get_by_id(MOST_RECENT_TRACK_ID, parent=rosebotics_key)    
  if most_recent_track is None:
    most_recent_track = RecentTrack(id=MOST_RECENT_TRACK_ID, parent=rosebotics_key, path=track_path)
    most_recent_track.put()
  elif most_recent_track.path != track_path:
    most_recent_track.path = track_path
    most_recent_track.put()
    

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
  return {"course": course_tasks_completed/float(total_course_tasks), "tracks": track_progress}