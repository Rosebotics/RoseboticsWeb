angular.module('ModalControllers', [])
.controller('ModalToggleCtrl', ["$modal", function($modal) {
	this.toggleSignOutModal = function() {
		var modalInstance = $modal.open({
		  templateUrl: 'logout_modal.html',
		  controller: 'SimpleModalInstanceCtrl',
		  controllerAs: 'modal'
		});
	};
	this.toggleEditProfileModal = function() {
		var modalInstance = $modal.open({
		  templateUrl: 'edit_profile_modal.html',
		  controller: 'SimpleModalInstanceCtrl',
		  controllerAs: 'modal'
		});
	};
}])
.controller('SimpleModalInstanceCtrl', ["$modalInstance", function ($modalInstance) {
  this.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
}])
.controller('NewMemberModalInstanceCtrl', ["$modalInstance", "$controller", function ($modalInstance, $controller) {
	angular.extend(this, $controller('SimpleModalInstanceCtrl', {$modalInstance: $modalInstance}));
	this.email = "";
	this.addMember = function(email) {
		email = email.trim();
		if (email.length === 0) {
			$modalInstance.dismiss('cancel');
			return;
		}
		if (email.indexOf('@') < 0) {
			email += '@gmail.com';
		}
	  $modalInstance.close(email);
	};
}])
.controller('DeleteTeamModalInstanceCtrl', ["$modalInstance", "$controller", function ($modalInstance, $controller) {
	angular.extend(this, $controller('SimpleModalInstanceCtrl', {$modalInstance: $modalInstance}));
	this.remove = function() {
	  $modalInstance.close();
	};
}])
.controller('CreateTeamModalInstanceCtrl', ["$modalInstance", "$controller", "user",  function ($modalInstance, $controller, user) {
	angular.extend(this, $controller('SimpleModalInstanceCtrl', {$modalInstance: $modalInstance}));
	this.teamName = "";
	this.teamMembers = "";
	this.includeLeader = false;
	var self = this;
	this.add = function() {
		var newTeam = {name: self.teamName, leader: user.email, members:[]};
		var members = self.teamMembers.split(',');
		for (var i = 0; i < members.length; i++) {
			var email = members[i].trim();
			if (email.length === 0) {
				continue;
			}
			if (email.indexOf('@') < 0) {
				email += '@gmail.com';
			}
			newTeam.members.push({email:email, visibility:"NOT_CHOSEN"});
		}
		if (self.includeLeader) {
			newTeam.members.push({email:user.email, visibility:"ALL_MEMBERS"});
		}
	  $modalInstance.close(newTeam);
	};
}])
.controller('ExportModalParentCtrl', ["$modalInstance", "$controller", "team", "$window", function ($modalInstance, $controller, team) {
	angular.extend(this, $controller('SimpleModalInstanceCtrl', {$modalInstance: $modalInstance}));
	this.team = team;
	this.fullname = true;
	this.username = true;
	this.hasTimestamp = true;
	this.pointValue = "points";
	this.pointsPerUnit = parseInt(localStorage.getItem("ppu")) || 1;
	this.pointsPerTask = parseInt(localStorage.getItem("ppt")) || 1;
	this.includeCourseProgress = false;
	this.includeTrackProgress = false;
	this.timezone = 'Eastern';
	this.timezones = ['UTC', 'Eastern', 'Central', 'Mountain', 'Pacific'];
	this.data = [];
	var self = this;
	if (team.members_progress.length > 0) {
	  var courses = team.members_progress[0].course_progress;
	  for (var i = 0; i < courses.length; i++) {
			var course = {name: courses[i].name, tracks:[], toggled:false};
			var tracks = courses[i].track_progress;
			for (var j = 0; j < tracks.length; j++) {
				var track = {name:tracks[j].name, units:[], toggled:false};
				var units = tracks[j].unit_progress;
				for(var k = 0; k < units.length; k++) {
					var unit = {name:units[k].name, toggled:false};
					track["units"].push(unit);
				}
				course["tracks"].push(track);
			}
			this.data.push(course);
	  }
	}
	var checkTrackToggle = function(track) {
		track.toggled = true;
		for(var i = 0; i < track.units.length; i++) {
			if(!track.units[i].toggled) {
				track.toggled = false;
				break;
			}
		}
	};
	var checkCourseToggle = function(course) {
		course.toggled = true;
		for(var i = 0; i < course.tracks.length; i++) {
			if(!course.tracks[i].toggled) {
				course.toggled = false;
				break;
			}
		}
	};
	this.toggleCourse = function(course) {
		var tracks = course.tracks;
		for (var j = 0; j < tracks.length; j++) {
			var units = tracks[j].units;
			for(var k = 0; k < units.length; k++) {
				units[k].toggled = !course.toggled;
			}
			tracks[j].toggled = !course.toggled;
		}
		course.toggled = !course.toggled;
	}
	this.toggleTrack = function(course, track) {
		var units = track.units;
		for(var k = 0; k < units.length; k++) {
			units[k].toggled = !track.toggled;
		}
		track.toggled = !track.toggled;
		checkCourseToggle(course);
	}
	this.unitToggled = function(course, track) {
		checkTrackToggle(track);
		checkCourseToggle(course);
	};
	this.generate = function() {
		var landingQs = "team_urlsafe=" + team.team_key;
		if(self.fullname) {
			landingQs += "&student_name=true";
		}
		if(self.username) {
			landingQs += "&rose_username=true";
		}
		if(self.hasTimestamp) {
			landingQs += "&timezone=" + self.timezone;
		}
		if(self.includeCourseProgress) {
			landingQs += "&course_progress=true";
		}
		if(self.includeTrackProgress) {
			landingQs += "&track_progress=true";
		}
		if(self.pointValue === "points") {
			landingQs += "&ppu=" + self.pointsPerUnit;
			localStorage.setItem("ppu", self.pointsPerUnit);
		} else {
			landingQs += "&ppt=" + self.pointsPerTask;
			localStorage.setItem("ppt", self.pointsPerTask);
		}
		var progress_data = angular.copy(self.data);
		for (var i = 0; i < progress_data.length; i++) {
			var course = progress_data[i];
			for (var j = 0; j < course.tracks.length; j++) {
				var track = course.tracks[j];
				var unitList = [];
				for(var k = 0; k < track.units.length; k++) {
					var unit = track.units[k];
					if(unit.toggled) {
						unitList.push(unit.name);
					}
				}
				track.units = unitList;
			} 
		}
		var jsonString = JSON.stringify(progress_data);
		landingQs += "&progress_data=" + jsonString;
		this.onPostGenerate(landingQs);
	};
}])
.controller('ExportModalInstanceCtrl', ["$modalInstance", "$controller", "team", "$window", function ($modalInstance, $controller, team, $window) {
	angular.extend(this, $controller('ExportModalParentCtrl', {$modalInstance:$modalInstance, $controller:$controller, team:team}));
	this.onPostGenerate = function(qs) {
		var landingUrl = "http://" + $window.location.host + "/teams/export.csv?";
		$window.open(landingUrl + encodeURI(qs), "_blank");
		$modalInstance.close();
	}
	this.doneButtonText = 'Generate';
}])
.controller('NewSweepModalInstanceCtrl', ["$modalInstance", "$controller", "team_key", "$modal", "progress",  function ($modalInstance, $controller, team_key, $modal, progress) {
	angular.extend(this, $controller('SimpleModalInstanceCtrl', {$modalInstance: $modalInstance}));
	this.sweep = {dt:new Date(), team_key:team_key, options:"", hourNum:12, tz:"Eastern"};
	this.timezones = ['UTC', 'Eastern', 'Central', 'Mountain', 'Pacific'];
	this.today = new Date(); 
	this.stopEvent = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
	};
	this.addSweep = function() {
	  $modalInstance.close(this.sweep);
	};
	var self = this;
	this.toggleSweepOptionsModal = function(sweep) {
		var modalInstance = $modal.open({
			  templateUrl: '/static/teams/partials/modals/export_progress_modal.html',
			  controller: 'SweepOptionsModalInstanceCtrl',
			  controllerAs: 'modal',
			  resolve: {
				  team: function() {
					  return progress;
				  }
			  }
		});
		modalInstance.result.then(function(newOptions) {
			self.options = newOptions;
		});
	};
}])
.controller('SweepOptionsModalInstanceCtrl', ["$modalInstance", "$controller", "team", function ($modalInstance, $controller, team) {
	angular.extend(this, $controller('ExportModalParentCtrl', {$modalInstance:$modalInstance, $controller:$controller, team:team}));
	this.onPostGenerate = function(qs) {
		$modalInstance.close(qs); 
	}
	this.doneButtonText = 'Done';
}]);