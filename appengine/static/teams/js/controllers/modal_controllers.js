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
.controller('ImportSweepsModalInstanceCtrl', ["$modalInstance", "$controller", "teams", function ($modalInstance, $controller, teams) {
	angular.extend(this, $controller('SimpleModalInstanceCtrl', {$modalInstance: $modalInstance}));
	this.teams = teams;
	this.selectedTeam = teams[0];
	this.import = function() {
	  $modalInstance.close(this.selectedTeam);
	};
}])
.controller('CreateTeamModalInstanceCtrl', ["$modalInstance", "$controller", "user", "courses", function ($modalInstance, $controller, user, courses) {
	angular.extend(this, $controller('SimpleModalInstanceCtrl', {$modalInstance: $modalInstance}));
	this.teamName = "";
	this.teamMembers = "";
	this.includeLeader = false;
	var self = this;
	this.courses = angular.copy(courses.ids);
	this.offeredCourses = courses;
	this.getCourseTitle = function(prefix) {
		for (var i = 0; i < courses.ids.length; i++) {
			if (courses.ids[i] === prefix) {
				return courses.titles[i];
			}
		}
		return "";
	};
	this.add = function() {
		var newTeam = {name: self.teamName, leader: user.email, members:[], courses:self.courses};
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
	this.timezone = 'EST';
  this.timezones = ['UTC', 'PDT', 'MDT', 'CDT', 'EDT', 'PST', 'MST', 'CST', 'EST'];
	var self = this;
	this.generate = function() {
		var landingQs = "team_urlsafe=" + team.team_key;
		if(this.fullname) {
			landingQs += "&student_name=true";
		}
		if(this.username) {
			landingQs += "&rose_username=true";
		}
		if(this.hasTimestamp) {
			landingQs += "&timezone=" + this.timezone;
		}
		if(this.includeCourseProgress) {
			landingQs += "&course_progress=true";
		}
		if(this.includeTrackProgress) {
			landingQs += "&track_progress=true";
		}
		if(this.pointValue === "points") {
			landingQs += "&ppu=" + this.pointsPerUnit;
			localStorage.setItem("ppu", this.pointsPerUnit);
		} else {
			landingQs += "&ppt=" + this.pointsPerTask;
			localStorage.setItem("ppt", this.pointsPerTask);
		}
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
	this.sweep = {dt:new Date(), team_key:team_key, options:"student_name=true&rose_username=true", hourNum:12, tz:"EST"};
  this.timezones = ['UTC', 'PDT', 'MDT', 'CDT', 'EDT', 'PST', 'MST', 'CST', 'EST'];
	this.today = new Date();
  this.doesRepeat = false;
  this.repeatWeeks = 0;
	this.stopEvent = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
	};
	this.addSweep = function() {
    if (this.doesRepeat) {
      this.sweep.repeats = this.repeatWeeks;
    }
	  $modalInstance.close(this.sweep);
	};
	var self = this;
	this.toggleSweepOptionsModal = function() {
		var modalInstance = $modal.open({
			  templateUrl: '/static/teams/partials/modals/export_progress_modal.html',
			  controller: 'SweepOptionsModalInstanceCtrl',
			  controllerAs: 'modal',
			  resolve: {
				  team: function() {
					  return progress;
				  },
				  optionString: function() {
					  return self.sweep.options;
				  }
			  }
		});
		modalInstance.result.then(function(newOptions) {
			self.sweep.options = newOptions;
		});
	};
}])
.controller('SweepOptionsModalInstanceCtrl', ["$modalInstance", "$controller", "team", "optionString", function ($modalInstance, $controller, team, optionString) {
	angular.extend(this, $controller('ExportModalParentCtrl', {$modalInstance:$modalInstance, $controller:$controller, team:team}));
	this.onPostGenerate = function(qs) {
		$modalInstance.close(qs);
	}
	this.doneButtonText = 'Done';
	if (optionString !== "") {
		var options = {};
		optionString = optionString.split('&');
		for(var i = 0; i < optionString.length; i++) {
			var op = optionString[i].split('=');
			options[op[0]] = op[1];
		}
		this.fullname = options['student_name'] === 'true';
		this.username = options['rose_username'] === 'true';
		this.hasTimestamp = options['timezone'] != undefined;
		this.pointValue = options['ppu'] ? "points" : "tasks";
		this.pointsPerUnit = parseInt(options['ppu']) || parseInt(localStorage.getItem("ppu")) || 1;
		this.pointsPerTask = parseInt(options['ppt']) || parseInt(localStorage.getItem("ppt")) || 1;
		this.includeCourseProgress = options['course_progress'] === 'true';
		this.includeTrackProgress = options['track_progress'] === 'true';
		this.timezone = options['timezone'] || 'EST';
    this.timezones = ['UTC', 'PDT', 'MDT', 'CDT', 'EDT', 'PST', 'MST', 'CST', 'EST'];
	}
}]);
