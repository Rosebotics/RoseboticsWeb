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
		for(var i = 0; i < members.length; i++) {
			var email = members[i].trim();
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
});
