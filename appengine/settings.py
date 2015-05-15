import jinja2
import os

# Courses
class RoseboticsCourse():
  def __init__(self, prefix, short_title, formal_title, desciption, color='#FCB03C', coming_soon=False):
    self.short_title = short_title
    self.prefix = prefix
    self.formal_title = formal_title
    self.description = desciption
    self.coming_soon = coming_soon
    self.color = color
    
  def get_url(self):
    return "/" + self.prefix
  
ANDROID = RoseboticsCourse(prefix='android',
                           short_title='Android',
                           formal_title='Android Application Development',
                           desciption='Get started building mobile applications for Android devices. Learn the basics of Android development and bring your app ideas to life.',
                           color='#a4c639')
IOS = RoseboticsCourse(prefix='ios',
                       short_title='iOS',
                       formal_title='iOS Application Development',
                       desciption='Get started building iOS applications for iPhone and iPad mobile devices. Learn the basics of iOS development and bring your app ideas to life.')
WEB = RoseboticsCourse(prefix='web',
                       short_title='Web',
                       formal_title='Web App Frameworks with AppEngine',
                       desciption='Learn the fundamentals of web development using Google App Engine. Topics also include CSS, HTML5, Javascript etc.',
                       color='#4285f4')
ME430 = RoseboticsCourse(prefix='me430',
                         short_title='Mechatronics',
                         formal_title='Mechatronics',
                         desciption='Learn to build and control electronics using a Microchip PIC. Get started building embedded control systems used in smart systems and products.',
                         color='#f26522')

CS1 = RoseboticsCourse(prefix='cs1',
                       short_title='CS1',
                       formal_title='Intro to Computer Science',
                       desciption='Course coming soon! Stay tuned :)',
                       coming_soon=True,
                       color='#ffd140')

ADV_WEB = RoseboticsCourse(prefix='advweb',
                           short_title='Adv Web',
                           formal_title='Advanced Web Development',
                           desciption='Course coming soon! Stay tuned :)',
                           coming_soon=True,
                           color='#dd1b16')

SMART_PRODUCT = RoseboticsCourse(prefix='smartproduct',
                                 short_title='Smart Product',
                                 formal_title='Smart Product Design',
                                 desciption='Course coming soon! Stay tuned :)',
                                 coming_soon=True,
                                 color='#03a0a9')

# this order matters!
course_list = [ANDROID, IOS, WEB, ME430, CS1, ADV_WEB, SMART_PRODUCT]

def __init_jinja_env():
  jenv = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

  return jenv

jinja_env = __init_jinja_env()