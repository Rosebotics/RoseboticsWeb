import endpoints
from google.appengine.ext import ndb
from protorpc import remote

from models.rosebotics_models import CourseProgress, MemberProgress, RoseboticsStudent, RoseboticsTeam, RoseboticsTeamMember,\
  Team, TrackProgress, UnitProgress, TeamVisibility, TotalTeamProgress,\
  TeamInvites, Teams, TeamInvite
from rosebotics_utils.progress_utils import get_total_progress_for_course


WEB_CLIENT_ID = "963009065087-2a5ccl5rhm4ghgm88li21fkjgsu5eua0.apps.googleusercontent.com"

@endpoints.api(name="teams", version="v1", description="ROSEbotics Team API",
               audiences=[WEB_CLIENT_ID],
               allowed_client_ids=[endpoints.API_EXPLORER_CLIENT_ID, WEB_CLIENT_ID])

class TeamApi(remote.Service):
  """ The Api for the Teams feature within ROSEbotics.org """

  @Team.method(user_required=True, name='insert', path='insert', http_method='POST')
  def insert_team(self, team):
    """ Creates or updates a team that you own (Currently only supports usernames) """
    user_email = get_user_email()
    if team.team_key:
      old_team = team.team_key.get()
    else:
      old_team = None
    if old_team is not None: 
      old_team.name = team.name
      old_team.put()
      old_members = RoseboticsTeamMember.query(ancestor=team.team_key)
      old_usernames = [m.username for m in old_members]
      new_usernames = []
      # if new username is NOT in old_members: add new_username
      for member in team.members:
        new_usernames.append(member.username)
        if member.username not in old_usernames:
          student = RoseboticsStudent.query(RoseboticsStudent.username==member.username).get()
          if student is None:
            continue
          student_email = student.key.string_id()
          member_key = get_member_key(team.team_key, student_email)
          new_member = RoseboticsTeamMember(key=member_key)
          new_member.username = student.username
          new_member.email = student_email
          new_member.put()
      # if old username is NOT in new_members remove old member
      for old_member in old_members:
        if old_member.username not in new_usernames:
          old_member.key.delete()
    else:
      new_team = RoseboticsTeam(leader=user_email, name=team.name)
      team.team_key = new_team.put()
      usernames = [member.username for member in team.members]
      student_query = RoseboticsStudent.query(RoseboticsStudent.username.IN(usernames))
      for student in student_query:
        student_email = student.key.string_id()
        member_key = get_member_key(team.team_key, student_email)
        new_member = RoseboticsTeamMember(key=member_key)
        new_member.username = student.username
        new_member.email = student_email
        new_member.put()
    return team

  @Team.method(user_required=True, request_fields=('team_key',), name='delete',
                         path='delete/{team_key}', http_method='DELETE')
  def delete_team(self, team):
    """ Deletes a team that you own """
    user_email = get_user_email()
    team = team.team_key.get()
    if team.leader != user_email:
      raise endpoints.BadRequestException('You are not the leader of this team!')
      return  
    team.team_key.delete()
    return RoseboticsTeam(name='deleted')

  @Teams.method(user_required=True, request_fields=(), name='list.member', 
                path='list/member', http_method='GET')
  def get_my_teams(self, empty):
    """ Gets the teams that you are a member of but are not the leader of """
    user_email = get_user_email()
    response = Teams()
    query = RoseboticsTeamMember.query(RoseboticsTeamMember.email==user_email)
    team_keys = [member.key.parent() for member in query]
    response.teams = [to_team_from_rosebotics(team_key.get()) for team_key in team_keys]
    return response

  @Teams.method(user_required=True, request_fields=(), name='list.leader', 
                path='list/leader', http_method='GET')
  def get_leader_teams(self, empty):
    """ Gets all of the teams you are leader of """
    user_email = get_user_email()
    response = Teams()
    query = RoseboticsTeam.query(RoseboticsTeam.leader==user_email)
    response.teams = [to_team_from_rosebotics(team) for team in query]
    return response

  @TeamInvite.method(user_required=True, name='invites.respond',
                     path="invites", http_method='POST')
  def team_invite_response(self, invite):
    """ Basically an update member within a team """
    user_email = get_user_email()
    key = get_member_key(invite.team_key, user_email)
    member = key.get()
    member.visibility = invite.response    
    member.put()
    return invite

  @TeamInvites.method(user_required=True, name='invites.list', request_fields=(),
                     path="invites", http_method='GET')
  def get_team_invites(self, empty):
    """ Get all of the invites to teams that you have """
    user_email = get_user_email()
    response = TeamInvites()
    query = RoseboticsTeamMember.query(RoseboticsTeamMember.email==user_email)
    for team_member in query:
      team = team_member.key.parent().get()
      invite = TeamInvite()
      invite.team_leader_name = team.leader
      invite.team_key = team.key
      invite.team_name = team.name
      invite.response = team_member.visibility
      response.invites.append(invite)
    return response

  @TotalTeamProgress.method(user_required=True, name='progress', request_fields=('team_key',),
                            path='progress/{team_key}', http_method='GET')
  def get_total_progress(self, team_progress):
    """ Gets total ROSEbotics progress for everyone in a team """
    user_email = get_user_email()
    rosebotics_team = team_progress.team_key.get()
    team_progress.name = rosebotics_team.name
    # change to filter by visibility?
    members = RoseboticsTeamMember.query(ancestor=team_progress.team_key)
    members_progress = []
    allowed_visibilies = [TeamVisibility.ALL_MEMBERS]
    if rosebotics_team.leader == user_email:
      allowed_visibilies.append(TeamVisibility.TEAM_LEADER)
    else:
      is_user_not_in_team = True
      for member in members:
        if member.email == user_email:
          is_user_not_in_team = False
          break
      if is_user_not_in_team:
        raise endpoints.BadRequestException("You are not allowed to view this team!")
    for member in members:
      if member.visibility in allowed_visibilies:
        members_progress.append(MemberProgress(email=member.email, display_name=member.username))        
    courses = ['ios', 'web'] # TODO: add android when it is broken into tracks
    for member in members_progress:
      for course in courses:
        progress = get_total_progress_for_course(member.email, course)
        member.course_progress.append(create_course_progress(course, progress))
    team_progress.members_progress = members_progress          
    return team_progress

def create_course_progress(course_name, progress):
  course_progress = CourseProgress(name=course_name, progress=progress["course"])
  for track in progress["tracks"]:
    track_name = track['name']
    track_progress = create_track_progress(track_name, track)
    course_progress.track_progress.append(track_progress)
  return course_progress
  
def create_track_progress(track_name, progress):
  track_progress = TrackProgress(name=track_name, progress=progress["track"])
  units = progress["units"]
  units = sorted(units.items(), key=lambda pair:int(pair[0]))
  units = map(lambda pair:pair[1], units)
  for index, unit_progress in enumerate(units):
    unit_name = "Unit " + str(index)
    unit = UnitProgress(name=unit_name, progress=unit_progress)
    track_progress.unit_progress.append(unit)
  return track_progress
    
def get_user_email():
  return endpoints.get_current_user().email().lower()

def get_member_key(team_key, email):
  return ndb.Key(RoseboticsTeamMember, email, parent=team_key)

def to_team_from_rosebotics(rosebotics_team):
  team = Team()
  team.name = rosebotics_team.name
  team.leader = rosebotics_team.leader
  team.team_key = rosebotics_team.key
  members = RoseboticsTeamMember.query(ancestor=rosebotics_team.key)
  team.members = [member for member in members] # iterate through them to get them all
  return team
