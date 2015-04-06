from google.appengine.ext import ndb
from protorpc.messages import Enum
from google.appengine.ext.ndb import msgprop
from endpoints_proto_datastore.ndb.model import EndpointsModel

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

class TeamVisibility(Enum):
    ALL_MEMBERS = 1 # Show my progress to everyone in team
    TEAM_LEADER = 2 # Show my progress to Team Leader only
    NOT_CHOSEN = 3 # Waiting for response from member
    REJECT_INVITE = 4 # For message purposes only

class RoseboticsTeamMember(EndpointsModel):
  email = ndb.StringProperty() # user's email address
  visibility = msgprop.EnumProperty(TeamVisibility, default=TeamVisibility.NOT_CHOSEN)

class RoseboticsTeam(EndpointsModel):
  # parent of team leader RoseboticsStudent (who may or may not be in the members)
  _message_fields_schema = ("entityKey", "name", "members")
  name = ndb.StringProperty() # Name for the team
  members = ndb.StructuredProperty(RoseboticsTeamMember, repeated=True)

class TeamInvite(EndpointsModel):
  """ Class for message purposes only """
  _message_fields_schema = ("team_leader_name", "team_key", "team_name", "response")
  team_leader_name = ndb.StringProperty()
  team_key = ndb.KeyProperty(kind=RoseboticsTeam)
  team_name = ndb.StringProperty()
  response = msgprop.EnumProperty(TeamVisibility)

class Progress(EndpointsModel):
  """ Class for message purposes only """
  _message_fields_schema = ("name", "progress")
  name = ndb.StringProperty()
  progress = ndb.FloatProperty()

class MemberProgress(EndpointsModel):
  """ Class for message purposes only """
  _message_fields_schema = ("display_name", "progress")
  display_name = ndb.StringProperty() # user name, name or email?
  progress = ndb.LocalStructuredProperty(Progress, repeated=True)
        
class TotalTeamProgress(EndpointsModel):
  """ Class for message purposes only """
  _message_fields_schema = ("team_key", "name", "progress_fields", "members")
  team_key = ndb.KeyProperty(kind=RoseboticsTeam)
  name = ndb.StringProperty()
  progress_fields = ndb.StringProperty(repeated=True)
  members = ndb.LocalStructuredProperty(MemberProgress, repeated=True)
  
class CourseTeamProgress(TotalTeamProgress):
  """ Class for message purposes only """
  _message_fields_schema = ("team_key", "course", "name", "progress_fields", "members")
  course = ndb.StringProperty()
  
class TrackTeamProgress(CourseTeamProgress):
  """ Class for message purposes only """
  _message_fields_schema = ("team_key", "course", "track", "name", "progress_fields", "members")
  track = ndb.StringProperty()
