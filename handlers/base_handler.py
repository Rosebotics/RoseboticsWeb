import logging

from google.appengine.api import users
from google.appengine.ext import ndb
import webapp2


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
  """ All pages that require login should inherit from this one."""
  def get(self):
    values = {}
    self.update_values(values)
    template = jinja_env.get_template(self.template_file())
    self.response.out.write(template.render(values))

  def update_values(self, values):
    pass


class OAuthBasePage(webapp2.RequestHandler):
  """ All pages that require login should inherit from this one."""
  def get(self):
    try:
      user = users.get_current_user()
      if not user:
        self.redirect(users.create_login_url(self.request.uri))
      values = {"logout_url": users.create_logout_url("/")}
      self.update_values(user, values)
      template = jinja_env.get_template(self.template_file())
      self.response.out.write(template.render(values))
    except Exception, e:
      logging.exception(e)
      self.redirect("/")

  def update_values(self, user, values):
    pass


