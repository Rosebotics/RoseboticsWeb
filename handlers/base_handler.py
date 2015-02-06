import logging

from google.appengine.api import users
from google.appengine.ext import ndb
import webapp2

from models.models import Student
from settings import jinja_env


class AccessDeniedException(Exception):
  """Exception thrown when access is denied for a given request.
  """
  def __str__(self):
    return 'Access denied'


class NoAccountException(Exception):
  """Exception thrown when there is no account for the given user.
  """
  def __str__(self):
    return 'Account required'


class NeedsEmailOptInException(Exception):
  """Exception thrown when there is a player has not yet answered the email approval.
  """
  def __str__(self):
    return 'Account setup incomplete'


class NeedsCreateAccessException(Exception):
  """Exception thrown when a player does not have create access and tries to access
  the Create portal.
  """
  def __str__(self):
    return 'Create access required'


class BasePage(webapp2.RequestHandler):
  """ALL page handlers should inherit from this one."""
  def get(self):
    try:
      user = users.get_current_user()
      logging.info("current user = " + str(user.email()))
      if not user:
        self.redirect(users.create_login_url(self.request.referer))
      
      student = Student.get_by_email(user.email())
      
      values = {"logout_url": users.create_logout_url("/")}
      self.update_values(student, values)
      template = jinja_env.get_template(self.template_file())
      self.response.out.write(template.render(values))
    except Exception, e:
      logging.exception(e)
      self.redirect("/")
  
  def update_values(self, student, values):
    pass #raise Exception("Subclasses must override this method")
  

