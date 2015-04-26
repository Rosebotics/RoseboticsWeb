angular.module('ModalControllers', [])
.controller('ModalToggleCtrl', function($modal) {
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
})
.controller('SimpleModalInstanceCtrl', function ($modalInstance) {
  this.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
})
.controller('NewMemberModalInstanceCtrl', function ($modalInstance, $controller) {
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
})
.controller('DeleteTeamModalInstanceCtrl', function ($modalInstance, $controller) {
	angular.extend(this, $controller('SimpleModalInstanceCtrl', {$modalInstance: $modalInstance}));
	this.remove = function() {
	  $modalInstance.close();
	};
})
.controller('CreateTeamModalInstanceCtrl', function ($modalInstance, $controller, userEmail) {
	angular.extend(this, $controller('SimpleModalInstanceCtrl', {$modalInstance: $modalInstance}));
	this.teamName = "";
	this.teamMembers = "";
	this.includeLeader = false;
	var self = this;
	this.add = function() {
		var newTeam = {name: self.teamName, leader: userEmail, members:[]};
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
			newTeam.members.push({email:userEmail, visibility:"ALL_MEMBERS"});
		}
	  $modalInstance.close(newTeam);
	};
})
.controller('ExportModalInstanceCtrl', function ($modalInstance, $controller, team, $window) {
	angular.extend(this, $controller('SimpleModalInstanceCtrl', {$modalInstance: $modalInstance}));
	this.team = team;
	this.fullname = true;
	this.username = true;
	this.data = [];
	if (team.members_progress.length > 0) {
	  this.courses = team.members_progress[0].course_progress;
	  for (var i = 0; i < courses.length; i++) {
			var course = {name: courses[i].name, tracks:[]};
			var tracks = courses[i].track_progress;
			for (var j = 0; j < tracks.length; j++) {
				var track = {name:tracks[j].name, units:[]};
				var units = tracks[j].unit_progress;
				for(var k = 0; k < units.length; k++) {
					track["units"].push({name:units[k].name, toggled:false});
				}
				course["tracks"].push(track);
			}
			this.data.push(course);
	  }
	}
	var self = this;
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
});
