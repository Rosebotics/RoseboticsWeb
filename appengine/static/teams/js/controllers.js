angular.module('TeamControllers', [])
.controller('SidebarCtrl', function(routes, $location, $log) {
	this.routes = routes;
	this.isActive = function(routeUrl) {
		var path = $location.path();
		routeUrl = routeUrl.substring(1);
		return path.startsWith(routeUrl);
	}
})
.controller('OverviewCtrl', function() {
})
.controller('TeamsCtrl', function(testing) {
	this.team = testing[0];
})
.controller('TeamsCourseCtrl', function($routeParams, testing) {
	for(var i = 0; i < testing.length; i++) {
		if(testing[i].team_key == $routeParams.team_key) {
			this.team = testing[i];
			break;
		}
	}
})
.controller('TeamsTrackCtrl', function($routeParams, testing) {
	this.course = $routeParams.course_name;
	for(var i = 0; i < testing.length; i++) {
		if(testing[i].team_key == $routeParams.team_key) {
			this.team = testing[i];
			break;
		}
	}
})
.controller('TeamsUnitCtrl', function($routeParams, testing) {
	this.course = $routeParams.course_name;
	this.track = $routeParams.track_name;
	for(var i = 0; i < testing.length; i++) {
		if(testing[i].team_key == $routeParams.team_key) {
			this.team = testing[i];
			break;
		}
	}
})
.controller('InvitesCtrl', function(testing) {
	this.team = testing[0];
})
.controller('ManageCtrl', function(testing) {
	this.team = testing[0];
	
})
.controller('ManageTeamCtrl', function($routeParams, testing) {
	for(var i = 0; i < testing.length; i++) {
		if(testing[i].team_key == $routeParams.team_key) {
			this.team = testing[i];
			break;
		}
	}
	this.memberEmails = ""
	for(var i = 0; i < this.team.members.length; i++){
		this.memberEmails += ", " + this.team.members[i].email;
	}
	if(this.memberEmails.length > 0) {
		this.memberEmails = this.memberEmails.substring(2);
	}
})
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
  this.cancel = function () {
    $modalInstance.close('cancel');
  };
});

