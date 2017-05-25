import jinja2
import os

# Courses
class RoseboticsCourse():
  def __init__(self, prefix, short_title, formal_title, desciption, color='#FCB03C', coming_soon=False, video_id="0TjxnrWT8Es"):
    self.short_title = short_title
    self.prefix = prefix
    self.formal_title = formal_title
    self.description = desciption
    self.coming_soon = coming_soon
    self.color = color
    self.video_id = video_id

  def get_url(self):
    return "/" + self.prefix

###
# Field descriptions:
# prefix: start of track names
# short_title: Title used in resume menu dropdown, used in teams area
# format_title: Used everywhere else
# description: Used in /courses page in the panels
# color: Used for progress bars in /courses
# coming_soon: If the course doesn't have tracks yet
# video_id: the id of the youtube video to show in the course page

NGFIRE = RoseboticsCourse(prefix='ngfire',
                           short_title='NgFire',
                           formal_title='Angular with Firebase',
                           desciption='Get started building web apps using the latest and greatest tools, Angular and Firebase.',
                           color='#dd1b16')
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
                       color='#4285f4',
                       video_id='PLN-oI858ZA')
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

SMART_PRODUCT = RoseboticsCourse(prefix='smartproduct',
                                 short_title='Smart Product',
                                 formal_title='Smart Product Design',
                                 desciption='Course coming soon! Stay tuned :)',
                                 coming_soon=True,
                                 color='#03a0a9')

# this order matters!
course_list = [NGFIRE, ANDROID, IOS, WEB, ME430, CS1, SMART_PRODUCT]

admin_list = ["boutell@gmail.com", "fisherds@gmail.com"]

def __init_jinja_env():
  jenv = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

  return jenv

jinja_env = __init_jinja_env()
