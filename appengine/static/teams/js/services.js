angular.module('TeamServices', [])
.factory('sidebar', function() {
	var isShowing = true;
	return { routes :
				[{name:'Overview', href:'#/overview/'}, 
		        {name:'Teams', href:'#/teams/'}, 
		        {name:'Invites', href:'#/invites/'}, 
		        {name:'Manage', href:'#/manage/'}],
		     show: 
		    	 { get: function() {
		    		 	return isShowing;
		    	 	},
		    	   set: function(showing) {
		    		   isShowing = showing;
		    	   }
		    	 }
			};
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
.service('oAuth', function ($q, $location, sidebar, $rootScope) {
  this.signin = function(immediate, callback) {
    gapi.auth.authorize({
      client_id: CLIENT_ID,
      scope: SCOPES,
      immediate: immediate
    }, callback);
  };
  this.check = function() {
	this.signin(true, function(authResult) {
	  if (authResult.error) {
		$location.path('/preview');
		sidebar.show.set(false);
	  } else if($location.path().startsWith('/preview')) {
		  $location.path('/overview');
	  }
	  $rootScope.$apply();
	});
  }
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
