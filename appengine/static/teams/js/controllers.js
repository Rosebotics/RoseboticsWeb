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
.controller('TeamsCtrl', function($modal, testing) {
	this.team = testing[0];
	this.toggleCreateTeamModal = function() {
		var modalInstance = $modal.open({
		  templateUrl: '/static/teams/partials/modals/create_team_modal.html',
		  controller: 'SimpleModalInstanceCtrl',
		  controllerAs: 'modal'
		});
	};
})
.controller('TeamsCourseCtrl', function($routeParams, $modal, testing) {
	for(var i = 0; i < testing.length; i++) {
		if(testing[i].team_key == $routeParams.team_key) {
			this.team = testing[i];
			break;
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
.controller('ManageCtrl', function($modal, testing) {
	this.team = testing[0];
	this.toggleCreateTeamModal = function() {
		var modalInstance = $modal.open({
		  templateUrl: '/static/teams/partials/modals/create_team_modal.html',
		  controller: 'SimpleModalInstanceCtrl',
		  controllerAs: 'modal'
		});
	};
})
.controller('ManageTeamCtrl', function($routeParams, $modal, testing) {
	for(var i = 0; i < testing.length; i++) {
		if(testing[i].team_key == $routeParams.team_key) {
			this.team = testing[i];
			break;
		}
	}
	this.toggleDeleteTeamModal = function() {
		var modalInstance = $modal.open({
		  templateUrl: '/static/teams/partials/modals/delete_team_modal.html',
		  controller: 'SimpleModalInstanceCtrl',
		  controllerAs: 'modal'
		});
	};
	this.toggleCreateMemberModal = function() {
		var modalInstance = $modal.open({
		  templateUrl: '/static/teams/partials/modals/create_member_modal.html',
		  controller: 'SimpleModalInstanceCtrl',
		  controllerAs: 'modal'
		});
	};
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
