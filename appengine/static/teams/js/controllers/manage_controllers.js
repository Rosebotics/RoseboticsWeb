angular.module('ManageControllers', [])
.controller('ManageCtrl', ["$modal", "teams", "api", "snackbar", "oAuth", function($modal, teams, api, snackbar, oAuth) {
	this.items = teams["teams"];
	var self = this;
	this.toggleCreateTeamModal = function() {
		var modalInstance = $modal.open({
		  templateUrl: '/static/teams/partials/modals/create_team_modal.html',
		  controller: 'CreateTeamModalInstanceCtrl',
		  controllerAs: 'modal',
			resolve: {
				user: function() {
					return oAuth.getUserInfo();
				},
				courses: function() {
					return api.getCourses();
				}
			}
		});
		modalInstance.result.then(function(newTeam) {
			snackbar.create("Creating team...", 1);
			api.insertTeam(newTeam).then(function(result) {
				snackbar.remove(1);
				snackbar.createWithTimeout("<b>Success!</b> Team created");
				if (teams["teams"] == undefined) {
					teams["teams"] = [];
					self.items = teams["teams"];
				}
				teams["teams"].push(result);
			}, function(error) {
				snackbar.remove(1);
				snackbar.createWithTimeout("<b>Error!</b> Team not created");
			});
		});
	};
}])
.controller('ManageTeamCtrl', ["$routeParams", "$modal", "teams", "$scope", "snackbar", "api", "$location", "user", "courses", function($routeParams, $modal, teams, $scope, snackbar, api, $location, user, courses) {
	var items = teams["teams"];
	var teamNumber = -1;
	for(var i = 0; i < items.length; i++) {
		if(items[i].team_key == $routeParams.team_key) {
			this.team = items[i];
			teamNumber = i;
			break;
		}
	}
	this.goToSweep = function() {
		$location.path($location.path() + "/sweeps");
	};
	this.offeredCourses = courses;
	console.log(courses);
	this.getCourseTitle = function (prefix) {
		for (var i = 0; i < courses.ids.length; i++) {
			if (courses.ids[i] === prefix) {
				return courses.titles[i];
			}
		}
		return "";
	}
	var timesChanged = 0;
	var self = this;
	var deregister = $scope.$watch(function () {
  	return self.team;
	}, function(){
		timesChanged++;
		self.onInputMadeDirty(timesChanged);
	}, true);
	this.onInputMadeDirty = function(timesChanged)  {
		if(timesChanged > 1) {
			snackbar.createWithTimeout("<b>Warning!</b> You must press submit to save your changes");
			deregister();
		}
	};
	this.deleteMember = function(member) {
		var members = self.team.members;
		for(var i = 0; i < members.length; i++) {
			if(members[i].email == member.email) {
				members.splice(i, 1);
				break;
			}
		}
	};
	this.saveTeam = function() {
		snackbar.create("Saving team...", 3);
		api.insertTeam(self.team).then(function(newTeam) {
			snackbar.remove(3);
			snackbar.createWithTimeout("<b>Success!</b> Team saved");
		}, function() {
			snackbar.remove(3);
			snackbar.createWithTimeout("<b>Error!</b> Team not saved");
		});
	}
	this.toggleDeleteTeamModal = function() {
		var modalInstance = $modal.open({
		  templateUrl: '/static/teams/partials/modals/delete_team_modal.html',
		  controller: 'DeleteTeamModalInstanceCtrl',
		  controllerAs: 'modal'
		});
		modalInstance.result.then(function() {
			items.splice(i, 1);
			snackbar.create("Deleting team...", 2);
			api.deleteTeam(self.team).then(function() {
				snackbar.remove(2);
				snackbar.createWithTimeout("<b>Success!</b> Team deleted");
			}, function() {
				snackbar.remove(2);
				snackbar.createWithTimeout("<b>Error!</b> Team not deleted");
			});
			$location.path('/manage');
		});
	};
	this.toggleCreateMemberModal = function() {
		var modalInstance = $modal.open({
		  templateUrl: '/static/teams/partials/modals/create_member_modal.html',
		  controller: 'NewMemberModalInstanceCtrl',
		  controllerAs: 'modal'
		});
		modalInstance.result.then(function(newEmail) {
			var newMember = {email: newEmail, visibility: "NOT_CHOSEN"};
			if (self.team.members == undefined) {
				self.team.members = [];
			}
			if (newEmail == user.email) {
				newMember.visibility = "ALL_MEMBERS";
			}
			self.team.members.push(newMember);
			self.team.newMembers = true;
		});
	};
	this.visibilityOptions = {"NOT_CHOSEN" : "No Response",
							  "ALL_MEMBERS" : "Progress visible by everyone",
							  "TEAM_LEADER": "Progress visible by leader only"};
}])
.controller('SweepsTeamCtrl', ["$routeParams", "$modal", "teams", "sweeps", "$location", "progress", "snackbar", "api", "$scope", function($routeParams, $modal, teams, sweeps, $location, progress, snackbar, api, $scope) {
	var items = teams["teams"];
	this.sweeps = sweeps["sweeps"] || [];
	var teamNumber = -1;
	this.today = new Date();
  this.timezones = ['UTC', 'PDT', 'MDT', 'CDT', 'EDT', 'PST', 'MST', 'CST', 'EST'];
	this.done = function() {
		$location.path("/manage/" + $routeParams.team_key);
	};
	for(var i = 0; i < items.length; i++) {
		if(items[i].team_key == $routeParams.team_key) {
			this.team = items[i];
			teamNumber = i;
			break;
		}
	}
	var self = this;
	for(var i = 0; i < this.sweeps.length; i++) {
		var sweep = this.sweeps[i];
		sweep.hourNum = parseInt(sweep.hour);
		var dt = new Date(0);
		dt.setFullYear(sweep.year);
		dt.setMonth(parseInt(sweep.month) - 1, parseInt(sweep.day));
		sweep.dt = dt;
	}
	this.saveSweep = function(sweep) {
		snackbar.create("Saving Sweep...", 6);
		sweep.hour = sweep.hourNum.toString();
		sweep.year = sweep.dt.getFullYear().toString();
		sweep.month = (sweep.dt.getMonth() + 1).toString();
		sweep.day = sweep.dt.getDate().toString();
		api.insertSweep(sweep).then(function(newSweep) {
			snackbar.remove(6);
			snackbar.createWithTimeout("<b>Success!</b> Sweep saved");
		}, function() {
			snackbar.remove(6);
			snackbar.createWithTimeout("<b>Error!</b> Sweep not saved");
		});
	};
	this.deleteSweep = function(sweep) {
		snackbar.create("Removing Sweep...", 7);
		api.deleteSweep(sweep).then(function() {
			for(var i = 0; i < self.sweeps.length; i++) {
				if(sweep.sweep_key === self.sweeps[i].sweep_key) {
					self.sweeps.splice(i, 1);
					break;
				}
			}
			snackbar.remove(7);
			snackbar.createWithTimeout("<b>Success!</b> Sweep removed");

		}, function() {
			snackbar.remove(7);
			snackbar.createWithTimeout("<b>Error!</b> Sweep not removed");
		});
	};
	this.stopEvent = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
	};
	this.toggleImportSweepsDialog = function() {
		var modalInstance = $modal.open({
			  templateUrl: '/static/teams/partials/modals/import_sweeps_modal.html',
			  controller: 'ImportSweepsModalInstanceCtrl',
			  controllerAs: 'modal',
			  resolve: {
				  teams: function() {
					  return items;
				  }
			  }
		});
		modalInstance.result.then(function(teamToImportFrom) {
			console.log(teamToImportFrom);
			snackbar.create("Importing from " + teamToImportFrom.name + "...", 10);
			api.getSweeps(teamToImportFrom).then(function(importedSweeps) {
				console.log(importedSweeps);
				if (!importedSweeps.sweeps || !importedSweeps.sweeps.length) {
					snackbar.remove(10);
					snackbar.createWithTimeout("<b>Error!</b> There were no sweeps to import");
					return;
				}
				for(var i = 0; i < importedSweeps.sweeps.length; i++) {
					var sweep = importedSweeps.sweeps[i];
					delete sweep.sweep_key;
					sweep.team_key = self.team.team_key;
					api.insertSweep(sweep).then(function(newSweep) {
						console.log(newSweep);
						newSweep.hourNum = parseInt(newSweep.hour);
						var dt = new Date(0);
						dt.setFullYear(newSweep.year);
						dt.setMonth(parseInt(newSweep.month) - 1, parseInt(newSweep.day));
						newSweep.dt = dt;
						if (sweeps["sweeps"] == undefined) {
							sweeps["sweeps"] = [];
							self.sweeps = sweeps["sweeps"];
						}
						var inserted = false;
						for(var i = 0; i < self.sweeps.length; i++) {
							if(self.sweeps[i].dt.getTime() < newSweep.dt.getTime() || (self.sweeps[i].dt.getTime() === newSweep.dt.getTime() && self.sweeps[i].hourNum < newSweep.hourNum)) {
								self.sweeps.splice(i, 0, newSweep);
								inserted = true;
								break;
							}
						}
						if(!inserted) {
							self.sweeps.push(newSweep);
						}
					});
				}
				snackbar.remove(10);
				snackbar.createWithTimeout("<b>Success!</b> Sweeps Imported");
			}, function() {
				snackbar.remove(10);
				snackbar.createWithTimeout("<b>Error!</b> Import failed");
			});
		});
	}
	this.toggleSweepOptionsModal = function(sweep) {
		var modalInstance = $modal.open({
			  templateUrl: '/static/teams/partials/modals/export_progress_modal.html',
			  controller: 'SweepOptionsModalInstanceCtrl',
			  controllerAs: 'modal',
			  resolve: {
				  team: function() {
					  return progress;
				  },
				  optionString: function() {
					  return sweep.options;
				  }
			  }
		});
		modalInstance.result.then(function(newOptions) {
			sweep.options = newOptions;
		});
	};
	this.toggleCreateSweepDialog = function() {
		var modalInstance = $modal.open({
			  templateUrl: '/static/teams/partials/modals/create_sweep_modal.html',
			  controller: 'NewSweepModalInstanceCtrl',
			  controllerAs: 'modal',
			  resolve: {
				  team_key: function() {
					  return $routeParams.team_key;
				  },
				  progress: function() {
					  return progress;
				  }
			  }
		});
		modalInstance.result.then(function(sweep) {
			snackbar.create("Creating Sweep...", 8);
			sweep.hour = sweep.hourNum.toString();
			sweep.year = sweep.dt.getFullYear().toString();
			sweep.month = (sweep.dt.getMonth() + 1).toString();
			sweep.day = sweep.dt.getDate().toString();
      var repeats = sweep.repeats || 0;
      var newSweeps = [sweep];
      var nextWeek = function (date, times) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate()+(7*times));
      }
      for (var i = 1; i <= repeats; i++) {
        var newSweep = angular.copy(newSweeps[0]);
        var dt = nextWeek(newSweep.dt, i); 
        newSweep.year = dt.getFullYear().toString();
        newSweep.month = (dt.getMonth() + 1).toString();
        newSweep.day = dt.getDate().toString();
        newSweeps.push(newSweep);
      }
      for (var j = 0; j < newSweeps.length; j++) {
        sweep = newSweeps[j];
        api.insertSweep(sweep).then(function(newSweep) {
          newSweep.hourNum = parseInt(newSweep.hour);
          var dt = new Date(0);
          dt.setFullYear(newSweep.year);
          dt.setMonth(parseInt(newSweep.month) - 1, parseInt(newSweep.day));
          newSweep.dt = dt;
          if (sweeps["sweeps"] == undefined) {
            sweeps["sweeps"] = [];
            self.sweeps = sweeps["sweeps"];
          }
          var inserted = false;
          for(var i = 0; i < self.sweeps.length; i++) {
            if(self.sweeps[i].dt.getTime() < newSweep.dt.getTime() || 
               (self.sweeps[i].dt.getTime() === newSweep.dt.getTime() && self.sweeps[i].hourNum < newSweep.hourNum)) {
              self.sweeps.splice(i, 0, newSweep);
              inserted = true;
              break;
            }
          }
          if(!inserted) {
            self.sweeps.push(newSweep);
          }
          snackbar.remove(8);
          snackbar.createWithTimeout("<b>Success!</b> Sweep created");
        }, function() {
          snackbar.remove(8);
          snackbar.createWithTimeout("<b>Error!</b> Sweep not created");
        });
      }
		});
	};
}]);
