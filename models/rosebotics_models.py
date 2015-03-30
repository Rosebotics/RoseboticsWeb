from google.appengine.ext import ndb


class RoseboticsStudent(ndb.Model):
  name = ndb.StringProperty()
  nickname = ndb.StringProperty()
  alt_email = ndb.StringProperty()
  username = ndb.StringProperty()
  details = ndb.TextProperty()

class RecentTrack(ndb.Model):
  # Parent key of Rosebotics Student
  # id of track name (i.e. Android, iOS, or Web)
  path = ndb.StringProperty(indexed=False)
