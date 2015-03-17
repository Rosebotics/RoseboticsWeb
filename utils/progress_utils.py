import logging

from controllers import sites
from google.appengine.api import namespace_manager
from models import progress
from models.courses import CourseModel12
from models.models import Student


### Helper methods ###
def get_progress_for_course(user, course_prefix):
  """ Returns a progess dict for the overall percentage of the course complete and an array of track
      percentages (in the order they appear in app.yaml) for the given course-prefix. """
  track_progress = []
  course_tasks_completed = 0
  total_course_tasks = 0
  all_course_app_contexts = sites.get_all_courses()
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