from handlers import base_handler
from rosebotics_utils import recent_track_utils
from google.appengine.api import users
from google.appengine.ext import ndb
import csv
from rosebotics_utils.progress_utils import get_csv_export_lists,\
  get_total_progress_for_course
import json
from settings import course_list as COURSE_LIST
from settings import admin_list as ADMIN_LIST
from models.rosebotics_models import RoseboticsTeamMember, TeamVisibility
from rosefire import RosefireTokenVerifier
from google.appengine.api.app_identity import get_application_id

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
    if user and 'most_recent_track' in values:
      for course in COURSE_LIST:
        if course.prefix in values['most_recent_track'].path:
          values['current_course'] = get_total_progress_for_course(user.email().lower(), course.prefix)
          values['current_course_obj'] = course # Default to course short title
          break
    else:
      values['login'] = {}
      for course in COURSE_LIST:
        values['login'][course.prefix] = users.create_login_url(course.get_url())
      return

class CompetitionPage(base_handler.BasePage):
  def template_file(self):
    return "templates/competition.html"

  def page_title(self):
    return "Competition"


class PlatformPage(base_handler.BasePage):
  def template_file(self):
    return "templates/rosebot.html"

  def page_title(self):
    return "RoseBot"

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
    rosefire_token = self.request.get("rosefire_token")
    if rosefire_token is not None and rosefire_token != "":
      authData = RosefireTokenVerifier(get_application_id()).verify(rosefire_token)
      rosebotics_student.username = authData.username
    rosebotics_student.details = self.request.get("connection")
    rosebotics_student.put()
    self.fill_in_team_members(rosebotics_student)
    self.redirect(self.request.referer)

  def fill_in_team_members(self, rosebotics_student):
    if rosebotics_student.username is None or rosebotics_student.username == "":
      return
    rose_email = rosebotics_student.username + "@rose-hulman.edu"
    query = RoseboticsTeamMember.query(RoseboticsTeamMember.email == rose_email)
    for team_member_key in query.iter(keys_only=True):
      team_key = team_member_key.parent()
      team_member_key.delete()
      team_member_key = ndb.Key(RoseboticsTeamMember, rosebotics_student.key.string_id(), parent=team_key)
      team_member = RoseboticsTeamMember(key=team_member_key)
      team_member.email = rosebotics_student.key.string_id()
      leader_email = team_key.get().leader
      if leader_email in ADMIN_LIST:
        team_member.visibility = TeamVisibility.TEAM_LEADER
      team_member.put()

class ExportCsvAction(base_handler.BaseAction):

  def get(self):
    # TODO: Remove
    self.post()

  def handle_post(self, rosebotics_student):
    export_student_name = len(self.request.get("student_name")) > 0
    export_rose_username = len(self.request.get("rose_username")) > 0
    team_urlsafe = self.request.get("team_urlsafe")
    timezone = self.request.get("timezone")
    course_progress = len(self.request.get("course_progress")) > 0
    track_progress = len(self.request.get("track_progress")) > 0
    unit_points = len(self.request.get("ppu")) > 0
    ppu = float(self.request.get("ppu", "1"))
    ppt = float(self.request.get("ppt", "1"))
    csv_data = get_csv_export_lists(rosebotics_student, team_urlsafe, export_student_name, export_rose_username, unit_points, ppu, ppt, course_progress, track_progress, timezone)
    self.response.headers['Content-Type'] = 'application/csv'
    writer = csv.writer(self.response.out)
    for csv_row in csv_data:
      writer.writerow(csv_row)
