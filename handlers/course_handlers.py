import logging

from controllers import sites
from handlers import base_handler
from models.models import Student
from google.appengine.api import namespace_manager


### PAGES ###
class WebCoursePage(base_handler.BasePage):
  def template_file(self):
    return "templates/web_course.html"

  def page_title(self, player, values):
    return "Web Development"

  def update_values(self, user, values):

    # Get the Student from all three tracks.
    logging.info("default_value = " + str(sites.GCB_COURSES_CONFIG.default_value))
    logging.info("value = " + str(sites.GCB_COURSES_CONFIG.value))
    logging.info("name = " + str(sites.GCB_COURSES_CONFIG.name))


    namespace_manager.set_namespace("gcb-course-courses-web-appengine")

    student_appengine = Student.get_by_email(user.email())
    logging.info("Student = " + str(student_appengine))

    values["progress"] = {"overall": .071, "tracks": [0.6, 0, 0]}

class IosCoursePage(base_handler.BasePage):
  def template_file(self):
    return "templates/ios_course.html"

  def page_title(self, player, values):
    return "iOS Development"

  def update_values(self, student, values):
    pass