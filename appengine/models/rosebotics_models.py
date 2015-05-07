from google.appengine.ext import ndb
from endpoints_proto_datastore.ndb.model import EndpointsModel
from datetime import datetime

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


class TeamVisibility():
  # I could not use this as an enum, because it was within a StructuredProperty,
  # and for whatever reason querying via enum did not work
  ALL_MEMBERS = "ALL_MEMBERS" # Show my progress to everyone in team
  TEAM_LEADER = "TEAM_LEADER" # Show my progress to Team Leader only
  NOT_CHOSEN = "NOT_CHOSEN" # Waiting for response from member
  REJECT_INVITE = "REJECT_INVITE" # For message purposes only
  values = [ALL_MEMBERS, TEAM_LEADER, NOT_CHOSEN, REJECT_INVITE]

class RoseboticsTeamMember(EndpointsModel):
  _message_fields_schema = ("email", "visibility")
  # parent of RoseboticsTeam
  # user's email address as id
  email = ndb.StringProperty()
  visibility = ndb.StringProperty(choices=TeamVisibility.values, default=TeamVisibility.NOT_CHOSEN, indexed=False)
  
  def get_email(self):
    return self.key.string_id()

class RoseboticsTeam(EndpointsModel):
  _message_fields_schema = ("entityKey", "name", "leader")
  name = ndb.StringProperty(indexed=False) # Name for the team
  leader = ndb.StringProperty() # email address of leader

class AutoSweep(ndb.Model):
  team_key = ndb.KeyProperty(kind=RoseboticsTeam)
  time = ndb.DateTimeProperty()
  options = ndb.JsonProperty()

### Endpoints Messaging Classes ###
class Sweep(EndpointsModel):
  """ Class for message purposes only """
  _message_fields_schema = ("sweep_key", "team_key", "year", "month", "day", "hour", "options")
  sweep_key = ndb.KeyProperty(kind=AutoSweep)
  team_key = ndb.KeyProperty(kind=RoseboticsTeam)
  options = ndb.StringProperty() # probably just the full qs from the client
  year = ndb.IntegerProperty()
  month = ndb.IntegerProperty()
  day = ndb.IntegerProperty()
  hour = ndb.IntegerProperty()
  email = ndb.StringProperty()
  
  def get_date_time(self):
    return datetime(year=self.year,
                    month=self.month,
                    day=self.day,
                    hour=self.hour)  
    
  def parse_options(self):
    options = {}
    qs = self.options.split('&', 1)
    for s in qs:
      s = s.split('=', 1)
      key = s[0]
      value = s[1]
      options[key] = value
    return options

class Sweeps(EndpointsModel):
  """ Class for message purposes only """
  _message_fields_schema = ("sweeps", "team_key")
  team_key = ndb.KeyProperty(kind=RoseboticsTeam)
  sweeps = ndb.LocalStructuredProperty(Sweep, repeated=True)

class Team(EndpointsModel):
  """ Class for message purposes only """
  _message_fields_schema = ("team_key", "name", "leader", "members")
  team_key = ndb.KeyProperty(kind=RoseboticsTeam)
  name = ndb.StringProperty() # Name for the team
  leader = ndb.StringProperty() # email address of leader...
  members = ndb.StructuredProperty(RoseboticsTeamMember, repeated=True)

class Teams(EndpointsModel):
  """ Class for message purposes only """
  _message_fields_schema = ("teams",)
  teams = ndb.LocalStructuredProperty(Team, repeated=True)

class TeamInvite(EndpointsModel):
  """ Class for message purposes only """
  _message_fields_schema = ("team_leader_name", "team_key", "team_name", "response")
  team_leader_name = ndb.StringProperty()
  team_key = ndb.KeyProperty(kind=RoseboticsTeam)
  team_name = ndb.StringProperty()
  response = ndb.StringProperty(choices=TeamVisibility.values, default=TeamVisibility.NOT_CHOSEN)

class TeamInvites(EndpointsModel):
  """ Class for message purposes only """
  _message_fields_schema = ("invites",)
  invites = ndb.LocalStructuredProperty(TeamInvite, repeated=True)

class UnitProgress(EndpointsModel):
  """ Class for message purposes only """
  _message_fields_schema = ("name", "progress")
  name = ndb.StringProperty()
  progress = ndb.FloatProperty()

class TrackProgress(EndpointsModel):
  """ Class for message purposes only """
  _message_fields_schema = ("name", "progress", "unit_progress")
  name = ndb.StringProperty()
  progress = ndb.FloatProperty()
  unit_progress = ndb.LocalStructuredProperty(UnitProgress, repeated=True)  

class CourseProgress(EndpointsModel):
  """ Class for message purposes only """
  _message_fields_schema = ("name", "progress", "track_progress")
  name = ndb.StringProperty()
  progress = ndb.FloatProperty()
  track_progress = ndb.LocalStructuredProperty(TrackProgress, repeated=True)

class MemberProgress(EndpointsModel):
  """ Class for message purposes only """
  _message_fields_schema = ("display_name","username" ,"course_progress")
  display_name = ndb.StringProperty()
  username = ndb.StringProperty()
  course_progress = ndb.LocalStructuredProperty(CourseProgress, repeated=True)

class TotalTeamProgress(EndpointsModel):
  """ Class for message purposes only """
  _message_fields_schema = ("team_key", "name", "members_progress")
  team_key = ndb.KeyProperty(kind=RoseboticsTeam)
  name = ndb.StringProperty() # Name of the team
  members_progress = ndb.LocalStructuredProperty(MemberProgress, repeated=True)