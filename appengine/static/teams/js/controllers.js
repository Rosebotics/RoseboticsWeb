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
.controller('TeamsCtrl', function() {
})
.controller('InvitesCtrl', function() {
	this.team = {name:'Test Team', leader:'Tyler Rockwood'};
})
.controller('ManageCtrl', function() {
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

