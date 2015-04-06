from google.appengine.ext import ndb
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


class TeamVisibility():
  # I could not use this on an enum, because it was within a StructuredProperty,
  # and for whatever reason querying 
  ALL_MEMBERS = "ALL_MEMBERS" # Show my progress to everyone in team
  TEAM_LEADER = "TEAM_LEADER" # Show my progress to Team Leader only
  NOT_CHOSEN = "NOT_CHOSEN" # Waiting for response from member
  REJECT_INVITE = "REJECT_INVITE" # For message purposes only
  
  values = [ALL_MEMBERS, TEAM_LEADER, NOT_CHOSEN, REJECT_INVITE]

class RoseboticsTeamMember(EndpointsModel):
  _message_fields_schema = ("username", "email",  "visibility")
  email = ndb.StringProperty() # user's email address
  username = ndb.StringProperty()
  visibility = ndb.StringProperty(choices=TeamVisibility.values, default=TeamVisibility.NOT_CHOSEN)

class RoseboticsTeam(EndpointsModel):
  _message_fields_schema = ("entityKey", "name", "leader", "members")
  # parent of team leader RoseboticsStudent (who may or may not be in the members)
  name = ndb.StringProperty() # Name for the team
  leader = ndb.StringProperty() # email address of leader...
  members = ndb.StructuredProperty(RoseboticsTeamMember, repeated=True)

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
  _message_fields_schema = ("display_name", "course_progress")
  display_name = ndb.StringProperty() # username
  email = ndb.StringProperty()
  course_progress = ndb.LocalStructuredProperty(CourseProgress, repeated=True)

class TotalTeamProgress(EndpointsModel):
  """ Class for message purposes only """
  _message_fields_schema = ("team_key", "name", "members_progress")
  team_key = ndb.KeyProperty(kind=RoseboticsTeam)
  name = ndb.StringProperty() # Name of the team
  members_progress = ndb.LocalStructuredProperty(MemberProgress, repeated=True)