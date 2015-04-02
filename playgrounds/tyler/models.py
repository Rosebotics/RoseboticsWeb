
class RoseboticsStudent(ndb.Model):
  name = ndb.StringProperty()
  nickname = ndb.StringProperty()
  alt_email = ndb.StringProperty()
  username = ndb.StringProperty()
  details = ndb.TextProperty()

# ALL_MEMBERS: Show my progress to everyone in team
# TEAM_LEADER: Show my progress to Team Leader only
# NOT_CHOSEN: Waiting for response from member
TEAM_VISIBLITIES = ['ALL_MEMBERS', 'TEAM_LEADER', 'NOT_CHOSEN']

class RoseboticsTeamMember(ndb.Model):
  # parent of Rosebotics student (easy query of my teams)
  # id of..? team name?
  email = ndb.StringProperty()
  visibility = ndb.StringProperty(default='NOT_CHOSEN', choices=TEAM_VISIBLITIES)

class RoseboticsTeam(ndb.Model):
  # parent of team leader RoseboticsStudent
  # id of team name
  members = ndb.KeyProperty(kind=RoseboticsTeamMember, repeated=True)
