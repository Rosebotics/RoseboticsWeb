import logging

from google.appengine.api import users
import webapp2

from models.rosebotics_models import RoseboticsStudent
from settings import jinja_env
from rosebotics_utils import recent_track_utils

class BasePage(webapp2.RequestHandler):
  """ If the user is logged in, then show their name. Otherwise, show different info. """
  def get(self):
    values = {"page_title": self.page_title()}
    user = users.get_current_user()
    if user:
      rosebotics_student = RoseboticsStudent.get_by_id(user.email().lower())
      if rosebotics_student is None:
        rosebotics_student = RoseboticsStudent(id=user.email().lower())
        rosebotics_student.put()
      values["logout_url"] = users.create_logout_url("/")
      values["rosebotics_student"] = rosebotics_student
      most_recent_course = recent_track_utils.get_most_recent_course(rosebotics_student.key)
      if most_recent_course is not None:
        values["most_recent_track"] = most_recent_course
      values.update(recent_track_utils.get_recent_tracks(rosebotics_student.key))
    elif self.requires_oauth():
      self.redirect("/courses")
      return
    else:
      values["login_url"] = users.create_login_url("/courses")


    self.update_values(user, values)
    template = jinja_env.get_template(self.template_file())
    self.response.out.write(template.render(values))

  def page_title(self):
    return "ROSEbotics"

  def update_values(self, user, values):
    pass

  def requires_oauth(self):
    return False

class BaseAction(webapp2.RequestHandler):

  def post(self):
    user = users.get_current_user()
    if user is None:
      self.redirect(self.request.referer)
      return
    rosebotics_student = RoseboticsStudent.get_by_id(user.email().lower())
    if rosebotics_student is None:
      self.redirect(self.request.referer)
      return
    self.handle_post(rosebotics_student)

  def handle_post(self, rosebotics_student):
    pass

class BaseRedirect(webapp2.RedirectHandler):

    def get(self):
      user = users.get_current_user()
      if user is None:
        self.redirect("/courses")
        return
      rosebotics_student = RoseboticsStudent.get_by_id(user.email().lower())
      if rosebotics_student is None:
        self.redirect("/courses")
        return
      self.handle_redirect(rosebotics_student)

    def handle_redirect(self, rosebotics_student):
      pass
