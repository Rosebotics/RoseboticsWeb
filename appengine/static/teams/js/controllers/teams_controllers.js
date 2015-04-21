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
	this.tracks = [];
	if (team.members_progress.length > 0) {
		var courses = team.members_progress[0].course_progress;
		for (var i = 0; i < courses.length; i++) {
			if (courses[i].name === this.course) {
				this.courseNum = i;
				var courseTracks = courses[i].track_progress;
				for (var j = 0; j < courseTracks.length; j++) {
					this.tracks.push(courseTracks[j].name);
				}
				break;
			}
		}
	}
	var self = this;
	this.getProgressForMemberTrack = function(member, trackNum) {
		return member.course_progress[self.courseNum].track_progress[trackNum].progress;
	}
})
.controller('TeamsUnitCtrl', function($routeParams, team) {
	this.team = team;
	this.course = $routeParams.course_name;
	this.track = $routeParams.track_name;
	this.units = [];
	if (team.members_progress.length > 0) {
		var courses = team.members_progress[0].course_progress;
		for (var i = 0; i < courses.length; i++) {
			if (courses[i].name === this.course) {
				this.courseNum = i;
				var tracks = courses[i].track_progress;
				for (var j = 0; j < tracks.length; j++) {
					if (tracks[j].name === this.track) {
						this.trackNum = j;
						var trackUnits = tracks[j].unit_progress;
						for (var k = 0; k < trackUnits.length; k++) {
							this.units.push(trackUnits[k].name);
						}
						break;
					}
				}
				break;
			}
		}
	}
	var self = this;
	this.getProgressForMemberUnit = function(member, unitNum) {
		return member.course_progress[self.courseNum].track_progress[self.trackNum].unit_progress[unitNum].progress;
	}
});
