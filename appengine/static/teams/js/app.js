'use strict';

angular.module('TeamApp', ['TeamControllers', 'ModalControllers', 'OverviewControllers', 'ManageControllers',
                           'TeamServices',  'InviteControllers', 'ui.bootstrap', 'ngRoute', 'TeamDirectives',
                           'angular.snackbar'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/overview/', {
        templateUrl: '/static/teams/partials/overview.html',
        controller: 'OverviewCtrl as overview'
      })
      .when('/preview/', {
        templateUrl: '/static/teams/partials/preview.html',
        controller: 'PreviewCtrl as preview'
      })
      .when('/teams/', {
        templateUrl: '/static/teams/partials/teams.html',
        controller: 'TeamsCtrl as teams',
        resolve: {
          teams: ['api', function(api) {
            return api.getTeams();
          }]
        }
      })
      .when('/teams/:team_key/courses', {
        templateUrl: '/static/teams/partials/teams_course.html',
        controller: 'TeamsCourseCtrl as courses',
        resolve: {
          team: ["api", "$route", function(api, $route) {
            return api.getProgress($route.current.params);
          }]
        }
      })
      .when('/teams/:team_key/courses/:course_name/tracks', {
        templateUrl: '/static/teams/partials/teams_track.html',
        controller: 'TeamsTrackCtrl as tracks',
        resolve: {
          team: ["api", "$route", function(api, $route) {
            return api.getProgress($route.current.params);
          }]
        }
      })
      .when('/teams/:team_key/courses/:course_name/tracks/:track_name/units', {
        templateUrl: '/static/teams/partials/teams_unit.html',
        controller: 'TeamsUnitCtrl as units',
        resolve: {
          team: ["api", "$route", function(api, $route) {
            return api.getProgress($route.current.params);
          }]
        }
      })
      .when('/invites/', {
        templateUrl: '/static/teams/partials/invites.html',
        controller: 'InvitesCtrl as invites',
        resolve: {
          invites: ["api", function(api) {
            return api.getInvites();
          }]
        }
      })
      .when('/manage/', {
        templateUrl: '/static/teams/partials/manage.html',
        controller: 'ManageCtrl as manage',
        resolve: {
          teams: ["api", function(api) {
            return api.getLeadTeams();
          }]
        }
      })
      .when('/manage/:team_key', {
        templateUrl: '/static/teams/partials/manage_team.html',
        controller: 'ManageTeamCtrl as manage',
        resolve: {
          teams: ["api", function(api) {
            return api.getLeadTeams();
          }],
          user: ["oAuth", function(oAuth) {
            return oAuth.getUserInfo();
          }]
        }
      })
      .otherwise({
        redirectTo: '/overview/'
      });
  }])
  .run(["$rootScope", "$location", "oAuth", "sidebar", function($rootScope, $location, oAuth, sidebar) {
	  angular.element(document.querySelectorAll(".hidden.container")).removeClass("hidden");
	  angular.element(document.querySelector("div.spinner")).addClass("hidden");
	  oAuth.check().then(null, function() {
  		$location.path('/preview');
  		sidebar.show.set(false);
	  });
	}]);
