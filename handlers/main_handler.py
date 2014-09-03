from handlers import base_handler


### PAGES ###
class HomePage(base_handler.BasePage):
  def template_file(self):
    return 'templates/home.html'

  def page_title(self, player, values):
    return 'Rosebotics'


class CoursePage(base_handler.BasePage):
  def template_file(self):
    return 'templates/courses.html'

  def page_title(self, player, values):
    return 'Course'


class CompetitionPage(base_handler.BasePage):
  def template_file(self):
    return 'templates/underconstruction.html'

  def page_title(self, player, values):
    return 'Competition'


class PlatformPage(base_handler.BasePage):
  def template_file(self):
    return 'templates/underconstruction.html'

  def page_title(self, player, values):
    return 'Platform'


class VideosPage(base_handler.BasePage):
  def template_file(self):
    return 'templates/underconstruction.html'

  def page_title(self, player, values):
    return 'Videos'


class AboutPage(base_handler.BasePage):
  def template_file(self):
    return 'templates/underconstruction.html'

  def page_title(self, player, values):
    return 'About'


class ContactPage(base_handler.BasePage):
  def template_file(self):
    return 'templates/underconstruction.html'

  def page_title(self, player, values):
    return 'Contact'


class GettingStartedtPage(base_handler.BasePage):
  def template_file(self):
    return 'templates/underconstruction.html'

  def page_title(self, player, values):
    return 'Get Started'
