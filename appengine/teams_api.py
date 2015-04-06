import endpoints
from protorpc import remote

from models.rosebotics_models import RoseboticsTeam, TotalTeamProgress, CourseTeamProgress, TrackTeamProgress,\
  TeamInvite


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
    pass
  
  @RoseboticsTeam.method(user_required=True, request_fields=('entityKey',), name='delete', 
                         path='delete/{entityKey}', http_method='DELETE')
  def delete_team(self, team):
    """ Deletes a team that you own """
    pass
 
  @RoseboticsTeam.query_method(user_required=True, query_fields=('limit', 'pageToken'), 
                               name='list.member', path='list/member', http_method='GET') 
  def get_my_teams(self, query):
    """ Gets the teams that you are a member of but are not the leader of """
    pass
  
  @RoseboticsTeam.query_method(user_required=True, query_fields=('limit', 'pageToken'), 
                               name='list.leader', path='list/leader', http_method='GET')
  def get_leader_teams(self, query):
    """ Gets all of the teams you are leader of """
    pass
      
  @TeamInvite.method(user_required=True, name='invites.respond', 
                     path="invites", http_method='POST')
  def team_invite_response(self, member):
    """ Basically an update member within a team """
    pass
  
  @TeamInvite.method(user_required=True, name='invites.list', request_fields=(), 
                     path="invites", http_method='GET')
  def get_team_invites(self, query):
    """ Get all of the invites to teams that you have """
    pass
    
  @TotalTeamProgress.method(user_required=True, name='progress.total', request_fields=('team_key',), 
                            path='{team_key}/progress/', http_method='GET')
  def get_total_progress(self, team):
    """ Gets total ROSEbotics progress for everyone in a team """
    pass 
  
  @CourseTeamProgress.method(user_required=True, name='progress.course', request_fields=('team_key','course'), 
                             path='{team_key}/progress/{course}', http_method='GET')  
  def get_track_progress(self, team, course):
    """ Gets track progress for everyone in a team """
    pass
  
  @TrackTeamProgress.method(user_required=True, name='progress.track', request_fields=('team_key', 'course','track'), 
                            path='{team_key}/progress/{course}/{track}', http_method='GET')
  def get_unit_progress(self, team, track):
    """ Gets unit progress for everyone in a team """
    pass  
    