from handlers import base_handler

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

  def page_title(self, player, values):
    return 'Platform'


class AboutPage(base_handler.BasePage):
  def template_file(self):
    return 'templates/underconstruction.html'

  def page_title(self):
    return 'About'


class ContactPage(base_handler.BasePage):
  def template_file(self):
    return 'templates/underconstruction.html'

  def page_title(self):
    return 'Contact'


class GettingStartedtPage(base_handler.BasePage):
  def template_file(self):
    return 'templates/underconstruction.html'

  def page_title(self):
    return 'Get Started'
