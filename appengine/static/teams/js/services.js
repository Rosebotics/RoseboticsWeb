angular.module('TeamServices', [])
.factory('routes', function() {
	return [{name:'Overview', href:'#/overview/'}, 
	        {name:'Teams', href:'#/teams/'}, 
	        {name:'Invites', href:'#/invites/'}, 
	        {name:'Manage', href:'#/manage/'}];
})
.factory('testing', function() {
	return [{	team_key:'abc123', 
				name:'Test Team', 
				leader:'Tyler Rockwood', 
				members:[
				         {email:'rockwotj@gmail.com', visibility:'ALL_MEMBERS'}, 
				         {email:'test@example.com', visibility:'ALL_MEMBERS'}
				        ]}];
})
.service('oAuth', function ($q) {
  this.signin = function(immediate, callback) {
    gapi.auth.authorize({
      client_id: CLIENT_ID,
      scope: SCOPES,
      immediate: immediate
    }, callback);
  };
})
.service('api', function ($q) {
  this.deleteTeam = function(team) {
	  var p = $q.defer();
	  return p.promise;
  };
  this.createTeam = function(name, memberEmails) {
	  var p = $q.defer();
	  return p.promise;
  };
  this.get_invites = function() {
	  var p = $q.defer();
	  return p.promise;
  };
  this.edit_invite = function(invite) {
	  var p = $q.defer();
	  return p.promise;
  };
  this.get_teams = function() {
	  var p = $q.defer();
	  return p.promise;
  };
  this.get_lead_teams = function() {
	  var p = $q.defer();
	  return p.promise;
  };
  this.get_progress = function(team) {
	  var p = $q.defer();
	  return p.promise;
  };
});
