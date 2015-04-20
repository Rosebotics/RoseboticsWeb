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
.factory('userEmail', function($rootScope) {
	return $rootScope.userEmail;
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
	this.execute = function(apiMethod) {
		var p = $q.defer();
		gapi.auth.authorize({
			client_id : CLIENT_ID,
			scope : SCOPES,
			immediate : true
		}, function() {
			apiMethod.execute(function(resp) {
				console.log(resp);
				if (!resp.code) {
					p.resolve(resp.result);
				} else {
					p.reject(resp);
				}
			});
		});
		return p.promise;
	};
})
.service('api', function (oAuth, $q) {
	var cache = {};
	var cachedApiCall = function(cacheKey, apiMethod) {
		return function(forceRefresh) {
			var p = $q.defer();
			if (cache[cacheKey] != undefined && forceRefresh == undefined) {
				p.resolve(cache[cacheKey]);
				return p.promise;
			}
			oAuth.execute(apiMethod)
			.then(function(resp) {
				cache[cacheKey] = resp;
				p.resolve(resp);
			}, function(error) {
				p.reject(error);
			});
			return p.promise;
		};
	};
	this.deleteTeam = function(team) {
		var p = $q.defer();
		oAuth.execute(gapi.client.teams.delete(team))
		.then(function(resp) {
			p.resolve(resp);
		}, function(error) {
			p.reject(error);
		});
		return p.promise;
	};
	this.insertTeam = function(team) {
		var p = $q.defer();
		oAuth.execute(gapi.client.teams.insert(team))
		.then(function(resp) {
			p.resolve(resp);
		}, function(error) {
			p.reject(error);
		});
		return p.promise;
	};
	this.getInvites = cachedApiCall("get_invites", gapi.client.teams.invites.list());
	this.editInvite = function(invite) {
		var p = $q.defer();
		oAuth.execute(gapi.client.teams.invites.respond(invite))
		.then(function(resp) {
			p.resolve(resp);
		}, function(error) {
			p.reject(error);
		});
		return p.promise;
	};
	this.getTeams = cachedApiCall("get_teams", gapi.client.teams.list.all());
	this.getLeadTeams = cachedApiCall("get_lead_teams", gapi.client.teams.list.leader());
	this.getProgress = function(team) {

	};
});
