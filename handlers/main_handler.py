from handlers import base_handler
import webapp2
from google.appengine.api import users
from models.rosebotics_models import RoseboticsStudent


### PAGES ###
class HomePage(base_handler.BasePage):
  def template_file(self):
    return "templates/home.html"


class CoursesPage(base_handler.BasePage):
  def template_file(self):
    return "templates/courses.html"

  def page_title(self):
    return "Courses"

  def update_values(self, user, values):
    values['active_page'] = 'courses'
    if not user:
      return
    # TODO: get progress for all courses



class CompetitionPage(base_handler.BasePage):
  def template_file(self):
    return 'templates/underconstruction.html'

  def page_title(self):
    return 'Competition'


class PlatformPage(base_handler.BasePage):
  def template_file(self):
    return 'templates/underconstruction.html'

  def page_title(self):
    return 'Platform'


### PAGES ###
class EditProfileAction(webapp2.RequestHandler):
  def post(self):
    user = users.get_current_user()
    if user is None:
      self.redirect(self.request.referer)
      return
    rosebotics_student = RoseboticsStudent.get_by_id(user.email().lower())
    if rosebotics_student is None:
      self.redirect(self.request.referer)
      return
    rosebotics_student.name = self.request.get('name')
    rosebotics_student.nickname = self.request.get('nickname')
    rosebotics_student.username = self.request.get('username')
    rosebotics_student.details = self.request.get('connection')
    rosebotics_student.put()
    self.redirect(self.request.referer)
