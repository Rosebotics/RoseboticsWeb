import endpoints
from google.appengine.ext import ndb
from protorpc import remote

from models.rosebotics_models import RoseboticsTeam, TotalTeamProgress, \
  TeamInvite, TeamVisibility, RoseboticsStudent, RoseboticsTeamMember, \
  TeamInvites, MemberProgress, CourseProgress, TrackProgress, UnitProgress
from rosebotics_utils.progress_utils import get_total_progress_for_course


WEB_CLIENT_ID = ""

LOCALHOST_ID = ""

@endpoints.api(name="teams", version="v1", description="ROSEbotics Team API",
               audiences=[WEB_CLIENT_ID, LOCALHOST_ID],
               allowed_client_ids=[endpoints.API_EXPLORER_CLIENT_ID, WEB_CLIENT_ID, LOCALHOST_ID])

class TeamApi(remote.Service):
  """ The Api for the Teams feature within ROSEbotics.org """

  @RoseboticsTeam.method(user_required=True, name='insert', path='insert', http_method='POST')
  def insert_team(self, team):
    """ Creates or updates a team that you own """
    user_email = get_user_email()
    if team.from_datastore:
      old_team = team.key.get()
      if old_team.leader != user_email:
          raise endpoints.BadRequestException('You are not the leader of this team!')
      old_team.name = team.name
      # TODO: implement the ability to add members after creation
      old_team.put()
      team = old_team
    else:
      new_team = RoseboticsTeam(leader=user_email, name=team.name)
      # assuming now that they only have username on creation
      usernames = [member.username for member in team.members]
      query = RoseboticsStudent.query(RoseboticsStudent.username.IN(usernames))
      for student in query:
        new_member = RoseboticsTeamMember(email = student.key.string_id(), 
                                          username = student.username)
        if new_member.email == user_email:
          new_member.visibility = TeamVisibility.ALL_MEMBERS
        new_team.members.append(new_member)
      new_team.put()
      team = new_team
    return team


  @RoseboticsTeam.method(user_required=True, request_fields=('entityKey',), name='delete',
                         path='delete/{entityKey}', http_method='DELETE')
  def delete_team(self, team):
    """ Deletes a team that you own """
    user_email = get_user_email()
    team = team.key.get()
    if team.leader != user_email:
      raise endpoints.BadRequestException('You are not the leader of this team!')
      return  
    team.key.delete()
    return RoseboticsTeam(name='deleted')

  @RoseboticsTeam.query_method(user_required=True, query_fields=('limit', 'pageToken'), 
                               name='list.member', path='list/member', http_method='GET')
  def get_my_teams(self, query):
    """ Gets the teams that you are a member of but are not the leader of """
    user_email = get_user_email()
    # Can you think of a way to exclude your own teams with leader being the ancestor?
    query = query.filter(ndb.AND(RoseboticsTeam.members.email == user_email, RoseboticsTeam.leader != user_email))
    return query

  @RoseboticsTeam.query_method(user_required=True, query_fields=('limit', 'pageToken'),
                               name='list.leader', path='list/leader', http_method='GET')
  def get_leader_teams(self, query):
    """ Gets all of the teams you are leader of """
    user_email = get_user_email()
    query = query.filter(RoseboticsTeam.leader == user_email)
    return query

  @TeamInvite.method(user_required=True, name='invites.respond',
                     path="invites", http_method='POST')
  def team_invite_response(self, invite):
    """ Basically an update member within a team """
    user_email = get_user_email()
    team = invite.team_key.get()
    for member in team.members:
      if member.email == user_email:
        member.visibility = invite.response
        break
    team.put()    
    return invite

  @TeamInvites.method(user_required=True, name='invites.list', request_fields=(),
                     path="invites", http_method='GET')
  def get_team_invites(self, query):
    """ Get all of the invites to teams that you have """
    user_email = get_user_email()
    # TODO: make it so you can change visibility at any time, not just once
    target = RoseboticsTeamMember(email=user_email)
    query = RoseboticsTeam.query(RoseboticsTeam.members == target)
    response = TeamInvites()
    for team in query:
      invite = TeamInvite()
      invite.team_leader_name = team.leader
      invite.team_key = team.key
      invite.team_name = team.name
      response.invites.append(invite)
    return response

  @TotalTeamProgress.method(user_required=True, name='progress', request_fields=('team_key',),
                            path='progress/{team_key}', http_method='GET')
  def get_total_progress(self, team_progress):
    """ Gets total ROSEbotics progress for everyone in a team """
    user_email = get_user_email()
    rosebotics_team = team_progress.team_key.get()
    team_progress.name = rosebotics_team.name
    members_progress = []
    allowed_visibilies = [TeamVisibility.ALL_MEMBERS]
    if rosebotics_team.leader == user_email:
      allowed_visibilies.append(TeamVisibility.TEAM_LEADER)
    else:
      is_user_not_in_team = True
      for member in rosebotics_team.members:
        if member.email == user_email:
          is_user_not_in_team = False
          break
      if is_user_not_in_team:
        raise endpoints.BadRequestException("You are not allowed to view this team!")
    for member in rosebotics_team.members:
      if member.visibility in allowed_visibilies:
        members_progress.append(MemberProgress(email=member.email, display_name=member.username))        
    courses = ['ios', 'web'] # TODO: add android when the track is finished
    for member in members_progress:
      for course in courses:
        progress = get_total_progress_for_course(member.email, course)
        member.course_progress.append(create_course_progress(course, progress))
    team_progress.members_progress = members_progress          
    return team_progress

def create_course_progress(course_name, progress):
  course_progress = CourseProgress(name=course_name, progress=progress["course"])
  for index, track in enumerate(progress["tracks"]):
    track_name = "Track " + str(index)
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
