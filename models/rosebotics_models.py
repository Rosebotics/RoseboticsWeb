from google.appengine.ext import ndb


class RoseboticsStudent(ndb.Model):
  name = ndb.StringProperty()
  username = ndb.StringProperty()
  details = ndb.TextProperty()
