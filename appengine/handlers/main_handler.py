from handlers import base_handler
from rosebotics_utils import recent_track_utils
from google.appengine.api import users
import csv
from rosebotics_utils.progress_utils import get_csv_export_lists
import json


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
    values["active_page"] = "courses"
    if not user:
      values["android_login"] = users.create_login_url("/android")
      values["ios_login"] = users.create_login_url("/ios")
      values["web_login"] = users.create_login_url("/web")
      values["me430_login"] = users.create_login_url("/me430")
      return
    # TODO: get progress for all courses

class CompetitionPage(base_handler.BasePage):
  def template_file(self):
    return "templates/underconstruction.html"

  def page_title(self):
    return "Competition"


class PlatformPage(base_handler.BasePage):
  def template_file(self):
    return "templates/underconstruction.html"

  def page_title(self):
    return "Platform"

class TeamsPage(base_handler.BasePage):
  def template_file(self):
    return "templates/teams.html"

  def requires_oauth(self):
    return True

### PAGES ###

class ResumeRedirect(base_handler.BaseRedirect):
    def handle_redirect(self, rosebotics_student):
      track = recent_track_utils.get_most_recent_course(rosebotics_student.key)
      if track is None:
        self.redirect("/courses")
      else:
        self.redirect(track.path)

class EditProfileAction(base_handler.BaseAction):
  def handle_post(self, rosebotics_student):
    rosebotics_student.name = self.request.get("name")
    rosebotics_student.nickname = self.request.get("nickname")
    rosebotics_student.alt_email = self.request.get("alt_email")
    rosebotics_student.username = self.request.get("username")
    rosebotics_student.details = self.request.get("connection")
    rosebotics_student.put()
    self.redirect(self.request.referer)

class ExportCsvAction(base_handler.BaseAction):

  def get(self):
    self.post()

  def handle_post(self, rosebotics_student):
    export_student_name = len(self.request.get("student_name")) > 0
    export_rose_username = len(self.request.get("rose_username")) > 0
    team_urlsafe = self.request.get("team_urlsafe")
    timezone = self.request.get("timezone")
    data = json.loads(self.request.get("progress_data"))
    csv_data = get_csv_export_lists(rosebotics_student, team_urlsafe, export_student_name, export_rose_username, timezone, data)
    self.response.headers['Content-Type'] = 'application/csv'
    writer = csv.writer(self.response.out)
    for csv_row in csv_data:
      writer.writerow(csv_row)
