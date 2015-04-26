angular.module('InviteControllers', [])
.controller('InvitesCtrl', function(invites, api, snackbar) {
	this.pending = [];
	this.accepted = [];
	var allInvites = invites["invites"];
	if (allInvites == undefined) {
		allInvites = [];
	}
	for (var i = 0; i < allInvites.length; i++) {
		if (allInvites[i].response === "NOT_CHOSEN") {
			this.pending.push(allInvites[i]);
		} else {
			this.accepted.push(allInvites[i]);
		}
	}
	var self = this;
	this.editInvite = function(invite, newResponse) {
		var refreshTeams = false; 
		if(invite.response === "NOT_CHOSEN" && newResponse !== "NOT_CHOSEN") {
			for(var i = 0; i < self.pending.length; i++) {
				if (self.pending[i].team_key === invite.team_key) {
					self.pending.splice(i, 1);
					break;
				}
			}
			self.accepted.push(invite);
			refreshTeams = true;
		}
		if (newResponse === "REJECT_INVITE") {
			for(var i = 0; i < self.accepted.length; i++) {
				if (self.accepted[i].team_key === invite.team_key) {
					self.accepted.splice(i, 1);
					break;
				}
			}
			refreshTeams = true;
		}
		invite.response = newResponse;
		snackbar.create("Sending response...", 4);
		api.editInvite(invite).then(function() {
			snackbar.remove(4);
			snackbar.createWithTimeout("<b>Success!</b> Response saved");
			if (refreshTeams) {
				api.getTeams(true);
			}
		}, function() {
			snackbar.remove(4);
			snackbar.createWithTimeout("<b>Error!</b> Response not saved");
		});
	}
	this.pendingResponses = ["NOT_CHOSEN", "ALL_MEMBERS", "TEAM_LEADER", "REJECT_INVITE"];
	this.acceptedResponses = ["ALL_MEMBERS", "TEAM_LEADER", "REJECT_INVITE"];
 	this.responseOptions = {"NOT_CHOSEN" : "",
													"ALL_MEMBERS" : "All members can see my progress",
													"TEAM_LEADER": "Only the leader can see my progress",
													"REJECT_INVITE": "Reject invite and no one can see my progress"};
});
