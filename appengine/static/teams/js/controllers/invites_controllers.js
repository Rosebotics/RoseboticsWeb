angular.module('InviteControllers', [])
.controller('InvitesCtrl', function(invites, api) {
	this.pending = [];
	this.accepted = [];
	var allInvites = invites["invites"];
	for (var i = 0; i < allInvites.length; i++) {
		if (allInvites[i].response === "NOT_CHOSEN") {
			this.pending.push(allInvites[i]);
		} else {
			this.accepted.push(allInvites[i]);
		}
	}
	this.editInvite = function(invite, newResponse) {
		//TODO
	}
	this.pendingResponses = ["NOT_CHOSEN", "ALL_MEMBERS", "TEAM_LEADER", "REJECT_INVITE"];
	this.acceptedResponses = ["ALL_MEMBERS", "TEAM_LEADER", "REJECT_INVITE"];
 	this.responseOptions = {"NOT_CHOSEN" : "",
													"ALL_MEMBERS" : "All members can see my progress",
													"TEAM_LEADER": "Only the leader can see my progress",
													"REJECT_INVITE": "Reject invite and no one can see my progress"};
});
