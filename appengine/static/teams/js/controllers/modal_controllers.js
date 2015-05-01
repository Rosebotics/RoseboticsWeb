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
.controller('ExportModalInstanceCtrl', ["$modalInstance", "$controller", "team", "$window", function ($modalInstance, $controller, team, $window) {
	angular.extend(this, $controller('SimpleModalInstanceCtrl', {$modalInstance: $modalInstance}));
	this.team = team;
	this.fullname = true;
	this.username = true;
	this.hasTimestamp = true;
	this.timezone = 'Eastern';
	this.timezones = ['UTC', 'Eastern', 'Central', 'Mountain', 'Pacific'];
	this.data = [];
	var self = this;
	if (team.members_progress.length > 0) {
	  this.courses = team.members_progress[0].course_progress;
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
		console.log(self.data, self.fullname, self.username);
		var landingUrl = "http://" + $window.location.host + "/teams/export.csv";
		landingUrl += "?team_urlsafe=" + team.team_key;
		if(self.fullname) {
			landingUrl += "&student_name=true";
		}
		if(self.username) {
			landingUrl += "&rose_username=true";
		}
		if(self.hasTimestamp) {
			landingUrl += "&timezone=" + self.timezone;
		}
		progress_data = angular.copy(self.data);
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
		landingUrl += "&progress_data=" + encodeURIComponent(JSON.stringify(progress_data));
		console.log(landingUrl);
		$window.open(landingUrl, "_blank");
		$modalInstance.close();
	};
}]);
