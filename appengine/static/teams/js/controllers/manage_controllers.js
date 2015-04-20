angular.module('ManageControllers', [])
.controller('ManageCtrl', function($modal, teams, api, snackbar) {
	this.items = teams["teams"];
	var self = this;
	this.toggleCreateTeamModal = function() {
		var modalInstance = $modal.open({
		  templateUrl: '/static/teams/partials/modals/create_team_modal.html',
		  controller: 'CreateTeamModalInstanceCtrl',
		  controllerAs: 'modal'
		});
		modalInstance.result.then(function(newTeam) {
			snackbar.create("Creating team...", 1);
			api.insertTeam(newTeam).then(function(result) {
				snackbar.remove(1);
				snackbar.createWithTimeout("<b>Success!</b> Team created");
				if (teams["teams"] == undefined) {
					teams["teams"] = [];
					self.items = teams["teams"];
				}
				teams["teams"].push(result);
			}, function(error) {
				snackbar.remove(1);
				snackbar.createWithTimeout("<b>Error!</b> Team not created");
			});
		});
	};
})
.controller('ManageTeamCtrl', function($routeParams, $modal, teams, $scope, snackbar, api, $location) {
	var items = teams["teams"];
	var teamNumber = -1;
	for(var i = 0; i < items.length; i++) {
		if(items[i].team_key == $routeParams.team_key) {
			this.team = items[i];
			teamNumber = i;
			break;
		}
	}
	var timesChanged = 0;
	var self = this;
	var deregister = $scope.$watch(function () {
  	return self.team;
	}, function(){
		timesChanged++;
		self.onInputMadeDirty(timesChanged);
	}, true);
  this.onInputMadeDirty = function(timesChanged)  {
		if(timesChanged > 1) {
			snackbar.createWithTimeout("<b>Warning!</b> You must press submit to save your changes");
			deregister();
		}
	};
	this.deleteMember = function(member) {
		var members = self.team.members;
		for(var i = 0; i < members.length; i++) {
			if(members[i].email == member.email) {
				members.splice(i, 1);
				break;
			}
		}
	};
	this.saveTeam = function() {
		snackbar.create("Saving team...", 3);
		api.insertTeam(self.team).then(function(newTeam) {
			snackbar.remove(3);
			snackbar.createWithTimeout("<b>Success!</b> Team saved");
		}, function() {
			snackbar.remove(3);
			snackbar.createWithTimeout("<b>Error!</b> Team not saved");
		});
	}
	this.toggleDeleteTeamModal = function() {
		var modalInstance = $modal.open({
		  templateUrl: '/static/teams/partials/modals/delete_team_modal.html',
		  controller: 'DeleteTeamModalInstanceCtrl',
		  controllerAs: 'modal'
		});
		modalInstance.result.then(function() {
			items.splice(i, 1);
			snackbar.create("Deleting team...", 2);
			api.deleteTeam(self.team).then(function() {
				snackbar.remove(2);
				snackbar.createWithTimeout("<b>Success!</b> Team deleted");
			}, function() {
				snackbar.remove(2);
				snackbar.createWithTimeout("<b>Error!</b> Team not deleted");
			});
			$location.path('/manage');
		});
	};
	this.toggleCreateMemberModal = function() {
		var modalInstance = $modal.open({
		  templateUrl: '/static/teams/partials/modals/create_member_modal.html',
		  controller: 'NewMemberModalInstanceCtrl',
		  controllerAs: 'modal'
		});
		modalInstance.result.then(function(newEmail) {
			var newMember = {email: newEmail, visibility: "NOT_CHOSEN"};
			self.team.members.push(newMember);
		});
	};
});
