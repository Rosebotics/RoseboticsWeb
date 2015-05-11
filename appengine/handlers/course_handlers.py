import logging

from handlers import base_handler
from rosebotics_utils import progress_utils


### PAGES ###
class AndroidCoursePage(base_handler.BasePage):
  def template_file(self):
    return "templates/android_course.html"

  def page_title(self):
    return "Android Development"

  def update_values(self, user, values):
    """ Updates the values passed to Jinja to add the progress in each track and the overall course """
    values["progress"] = progress_utils.get_progress_for_course(user, "android")

  def requires_oauth(self):
    return True

class IosCoursePage(base_handler.BasePage):
  def template_file(self):
    return "templates/ios_course.html"

  def page_title(self):
    return "iOS Development"

  def update_values(self, user, values):
    """ Updates the values passed to Jinja to add the progress in each track and the overall course """
    values["progress"] = progress_utils.get_progress_for_course(user, "ios")

  def requires_oauth(self):
    return True



class Me430CoursePage(base_handler.BasePage):
  def template_file(self):
    return "templates/me430_course.html"

  def page_title(self):
    return "ME430 Mechatronics"

  def update_values(self, user, values):
    """ Updates the values passed to Jinja to add the progress in each track and the overall course """
    values["progress"] = progress_utils.get_progress_for_course(user, "me430")

  def requires_oauth(self):
    return True


class WebCoursePage(base_handler.BasePage):
  def template_file(self):
    return "templates/web_course.html"

  def page_title(self):
    return "Web Development"

  def update_values(self, user, values):
    """ Updates the values passed to Jinja to add the progress in each track and the overall course """
    values["progress"] = progress_utils.get_progress_for_course(user, "web")

  def requires_oauth(self):
    return True
