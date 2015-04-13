from handlers import base_handler
from rosebotics_utils import recent_track_utils


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
