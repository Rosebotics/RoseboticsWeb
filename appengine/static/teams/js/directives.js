angular.module('TeamDirectives', [])
.directive('teamTitle', function() {
  return {
	restrict: 'E',
	  scope: {
	    team: '='
	  },
    templateUrl: '/static/teams/partials/components/team_title.html'
  };
});