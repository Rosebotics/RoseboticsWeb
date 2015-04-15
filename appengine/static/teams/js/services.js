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
  this.doCall = function() {
	  var p = $q.defer();
	  apiCallInProgress = true;
	  gapi.auth.authorize({
	    client_id: CLIENT_ID,
	    scope: SCOPES,
	    immediate: true
	  }, function(){
	    var request = gapi.client.oauth2.userinfo.get().execute(function(resp) {
	      if (!resp.code) {
	        p.resolve(gapi);
	      } else {
	        p.reject(gapi);
	      }
	    });
	  });
	  return p.promise;
  };

  this.signin = function(immediate, callback) {
    gapi.auth.authorize({
      client_id: CLIENT_ID,
      scope: SCOPES,
      immediate: immediate
    }, callback);
  };
});
