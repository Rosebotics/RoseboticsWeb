from handlers import base_handler


### PAGES ###
class WebCoursePage(base_handler.BasePage):
  def template_file(self):
    return "templates/web_course.html"

  def page_title(self, player, values):
    return "Web Development"
