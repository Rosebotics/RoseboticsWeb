angular.module('TeamControllers', [])
.controller('TeamsCtrl', function($modal, teams) {
	this.items = teams["teams"];
	var self = this;
	this.toggleCreateTeamModal = function() {
		var modalInstance = $modal.open({
		  templateUrl: '/static/teams/partials/modals/create_team_modal.html',
		  controller: 'CreateTeamModalInstanceCtrl',
		  controllerAs: 'modal'
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
})
.controller('TeamsCourseCtrl', function($modal, team) {
  this.team = team;
	this.courses = [];
	if (team.members_progress.length > 0) {
		courses = team.members_progress[0].course_progress;
		for (var i = 0; i < courses.length; i++) {
			this.courses.push(courses[i].name);
		}
	}
	this.toggleExportProgressModal = function() {
		var modalInstance = $modal.open({
		  templateUrl: '/static/teams/partials/modals/export_progress_modal.html',
		  controller: 'SimpleModalInstanceCtrl',
		  controllerAs: 'modal'
		});
	};
})
.controller('TeamsTrackCtrl', function($routeParams, team) {
	this.team = team;
	this.course = $routeParams.course_name;
})
.controller('TeamsUnitCtrl', function($routeParams, team) {
	this.team = team;
	this.course = $routeParams.course_name;
	this.track = $routeParams.track_name;
});
