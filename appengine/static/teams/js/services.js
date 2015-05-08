angular.module('TeamServices', [])
.factory('sidebar', function() {
	var isShowing = true;
	return { routes :
		[{name:'Overview', href:'#/overview/'},
		{name:'Teams', href:'#/teams/'},
		{name:'Invites', href:'#/invites/'},
		{name:'Manage', href:'#/manage/'}],
		show:
		{
			get: function() {
				return isShowing;
			},
			set: function(showing) {
				isShowing = showing;
			}
		}
	};
})
.factory('userEmail', ["$rootScope", function($rootScope) {
	return $rootScope.userEmail;
}])
.service('oAuth', ["$q", "$location", function ($q, $location) {
	var signin = function(immediate) {
		return function() {
			var p = $q.defer();
			gapi.auth.authorize({
				client_id: CLIENT_ID,
				scope: SCOPES,
				immediate: immediate
			}, function(authResult) {
				if (authResult.error) {
					p.reject(authResult);
				} else {
					p.resolve(authResult);
				}
			});
			return p.promise;
		}
	};
	this.signup = signin(false);
	this.check = signin(true);
	this.execute = function(apiMethod) {
		var p = $q.defer();
		gapi.auth.authorize({
			client_id : CLIENT_ID,
			scope : SCOPES,
			immediate : true
		}, function() {
			apiMethod.execute(function(resp) {
				if (!resp.code) {
					p.resolve(resp.result);
				} else {
					p.reject(resp);
				}
			});
		});
		return p.promise;
	};
	this.getUserInfo = function() {
		return this.execute(gapi.client.oauth2.userinfo.get());
	};
}])
.service('api', ["oAuth", "$q", function (oAuth, $q) {
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
	var cachedTeamApiCall = function(type, apiMethod) {
		return function(params) {
			var p = $q.defer();
			if(cache[type + params.team_key] != undefined) {
				p.resolve(cache[type + params.team_key]);
				return p.promise;
			}
			oAuth.execute(apiMethod(params))
			.then(function(resp) {
				cache[type + params.team_key] = resp;
				p.resolve(resp);
			}, function(error) {
				p.reject(error);
			});
			return p.promise;
		};
	};
	this.deleteTeam = function(team) {
		if (cache["get_teams"] != undefined) {
			var teams = cache["get_teams"]["teams"];
			for(var i = 0; i < teams.length; i++) {
				if(team.team_key == teams[i].team_key) {
					teams.splice(i, 1);
					break;
				}
			}
		}
		return oAuth.execute(gapi.client.teams.delete(team));
	};
	this.insertTeam = function(team) {
		var p = $q.defer();
		var updateCache = cache["get_teams"] != undefined;
		var teams = undefined;
		var newTeam = team.team_key == undefined;
		if (updateCache) {
			teams = cache["get_teams"]["teams"];
			if(teams == undefined) {
				cache["get_teams"]["teams"] = [];
				teams = cache["get_teams"]["teams"];
			}
		}
		oAuth.execute(gapi.client.teams.insert(team))
		.then(function(resp) {
			if(updateCache) {
				if(newTeam) {
					teams.push(resp)
				} else {
					for(var i = 0; i < teams.length; i++) {
						if(resp.team_key === teams[i].team_key) {
							teams[i] = resp;
							break;
						}
					}
				}
			}
			p.resolve(resp);
		}, function(error) {
			p.reject(error);
		});
		return p.promise;
	};
	this.getInvites = cachedApiCall("get_invites", gapi.client.teams.invites.list());
	this.editInvite = function(invite) {
		return oAuth.execute(gapi.client.teams.invites.respond(invite));
	};
	this.getTeams = cachedApiCall("get_teams", gapi.client.teams.list.all());
	this.getLeadTeams = cachedApiCall("get_lead_teams", gapi.client.teams.list.leader());
	this.getProgress = cachedTeamApiCall("progress", gapi.client.teams.progress);
	this.getSweeps = cachedTeamApiCall("sweep", gapi.client.teams.sweeps.get);
	this.insertSweep = function(sweep) {
		return oAuth.execute(gapi.client.teams.sweeps.insert(sweep));
	}
	this.deleteSweep = function(sweep) {
		return oAuth.execute(gapi.client.teams.sweeps.delete(sweep));
	}
}]);
