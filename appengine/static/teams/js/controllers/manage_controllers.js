angular.module('ManageControllers', [])
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
});