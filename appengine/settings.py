import jinja2
import os

# Courses
course_list = ['Android', 'iOS', 'Web', 'ME430']

formal_titles = {'Android':"Android Application Development", 'iOS':"iOS Application Development", 'Web':"Web Development", 'ME430':"Mechatronics"}

def __init_jinja_env():
  jenv = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

  return jenv

jinja_env = __init_jinja_env()