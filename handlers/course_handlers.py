import logging

from controllers import sites
from google.appengine.api import namespace_manager
from handlers import base_handler
from models import progress
from models.courses import CourseModel12
from models.models import Student


### PAGES ###
class WebCoursePage(base_handler.BasePage):
  def template_file(self):
    return "templates/web_course.html"

  def page_title(self, player, values):
    return "Web Development"

  def update_values(self, user, values):

    # TODO: Finish implementation.  This is just proof of concept stuff.
    track_progress = []
    course_tasks_completed = 0
    total_course_tasks = 0
    all_course_app_contexts = sites.get_all_courses()
    for course_app_context in all_course_app_contexts:
      namespace = course_app_context.namespace
      if not namespace.startswith("gcb-course-courses-web-"):
        continue
      namespace_manager.set_namespace(namespace)
      student = Student.get_by_email(user.email())
      if student:
        course = CourseModel12.load(course_app_context)
        tracker = progress.UnitLessonCompletionTracker(course)
        lesson_breakdown = tracker.get_lesson_breakdown(student)
        logging.info("Lesson progress in " + course_app_context.namespace + " = " + str(lesson_breakdown))
        track_tasks_completed = 0
        total_track_tasks = 0
        for unit_tasks_completed, total_unit_tasks in lesson_breakdown.values():
          track_tasks_completed += unit_tasks_completed
          total_track_tasks += total_unit_tasks
        track_progress.append(track_tasks_completed/float(total_track_tasks))
        course_tasks_completed += track_tasks_completed
        total_course_tasks += total_track_tasks
        logging.info("track_progress " + str(track_progress))
        logging.info("course_tasks_completed " + str(course_tasks_completed))
        logging.info("total_course_tasks " + str(total_course_tasks))
      else:
        logging.info("No student found in " + namespace)
        track_progress.append(0)
        total_course_tasks += 100 # TODO: Modify get_lesson_breakdown so it doesn't require a student so we can get total_track_tasks for those

    values["progress"] = {"overall": course_tasks_completed/float(total_course_tasks), "tracks": track_progress}

class IosCoursePage(base_handler.BasePage):
  def template_file(self):
    return "templates/ios_course.html"

  def page_title(self, player, values):
    return "iOS Development"

  def update_values(self, student, values):
    pass