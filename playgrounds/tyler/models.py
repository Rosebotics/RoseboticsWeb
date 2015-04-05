from protorpc.messages import Enum
from google.appengine.ext.ndb import msgprop

class RoseboticsStudent(ndb.Model):
  name = ndb.StringProperty()
  nickname = ndb.StringProperty()
  alt_email = ndb.StringProperty()
  username = ndb.StringProperty()
  details = ndb.TextProperty()

# Does a structured property need to extend EndpointsModel?
class RoseboticsTeamMember(EndpointsModel):
  class TeamVisibility(Enum):
    ALL_MEMBERS = 1 # Show my progress to everyone in team
    TEAM_LEADER = 2 # Show my progress to Team Leader only
    NOT_CHOSEN = 3 # Waiting for response from member
  email = ndb.StringProperty() # user's email address
  visibility = msgprop.EnumProperty(TeamVisibility, default=TeamVisibility.NOT_CHOSEN)

class RoseboticsTeam(EndpointsModel):
  # parent of team leader RoseboticsStudent (who may or may not be in the members)
  _message_fields_schema = ("entityKey", "name", "members")
  name = ndb.StringProperty() # Name for the team
  members = ndb.StructuredProperty(RoseboticsTeamMember, repeated=True)

class MemberProgress(EndpointsModel):
    """ Class for message purposes only """
    _message_fields_schema = ("display_name", "progress")
    display_name = ndb.StringProperty() # user name, name or email?
    progress = ndb.JsonProperty()
    # The progress is a dict with keys of: (iOS, Andriod, Web, etc..)
    # and the values of the percent done with the course.
    # this would obviously have the name of the tracks if on a Course level
    # and Units if this was on a track level.
    # can I get the name of the units? Or is Unit 1, Unit 2, etc okay?
