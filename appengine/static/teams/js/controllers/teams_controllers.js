angular.module('TeamControllers', [])
.controller('TeamsCtrl', ["$modal", "teams", function($modal, teams) {
	this.items = teams["teams"];
	var self = this;
}])
.controller('TeamsParentCtrl', ['$modal', 'team', function($modal, team) {
	this.toggleExportProgressModal = function() {
		var modalInstance = $modal.open({
		  templateUrl: '/static/teams/partials/modals/export_progress_modal.html',
		  controller: 'ExportModalInstanceCtrl',
		  controllerAs: 'modal',
		  resolve: {
			  team: function() {
				  return team;
			  }
		  }
		});
	};
}])
.controller('TeamsCourseCtrl', ["$modal", "team", "$controller", function($modal, team, $controller) {
	angular.extend(this, $controller('TeamsParentCtrl', {$modal: $modal, team: team}));
  this.team = team;
	if (team.members_progress == undefined) {
		this.team.members_progress = [];
	}
	this.courses = [];
	if (team.members_progress.length > 0) {
		courses = team.members_progress[0].course_progress;
		for (var i = 0; i < courses.length; i++) {
			this.courses.push(courses[i].name);
		}
	}
}])
.controller('TeamsTrackCtrl', ["$routeParams", "team", "$modal", "$controller", function($routeParams, team, $modal, $controller) {
	angular.extend(this, $controller('TeamsParentCtrl', {$modal: $modal, team: team}));
	this.team = team;
	if (team.members_progress == undefined) {
		this.team.members_progress = [];
	}
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
}])
.controller('TeamsUnitCtrl', ["$routeParams", "team", "$modal", "$controller", function($routeParams, team, $modal, $controller) {
	angular.extend(this, $controller('TeamsParentCtrl', {$modal: $modal, team: team}));
	this.team = team;
	if (team.members_progress == undefined) {
		this.team.members_progress = [];
	}
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
}]);
