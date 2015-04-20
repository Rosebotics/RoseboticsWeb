'use strict';

angular.module('TeamApp', ['TeamControllers', 'ModalControllers', 'OverviewControllers', 'ManageControllers', 
                           'TeamServices',  'InviteControllers', 'ui.bootstrap', 'ngRoute', 'TeamDirectives'])
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
        controller: 'TeamsCtrl as teams'
      })
      .when('/teams/:team_key/courses', {
        templateUrl: '/static/teams/partials/teams_course.html',
        controller: 'TeamsCourseCtrl as courses'
      })
      .when('/teams/:team_key/courses/:course_name', {
        templateUrl: '/static/teams/partials/teams_track.html',
        controller: 'TeamsTrackCtrl as tracks'
      })
      .when('/teams/:team_key/courses/:course_name/tracks/:track_name', {
        templateUrl: '/static/teams/partials/teams_unit.html',
        controller: 'TeamsUnitCtrl as units'
      })
      .when('/invites/', {
        templateUrl: '/static/teams/partials/invites.html',
        controller: 'InvitesCtrl as invites'
      })
      .when('/manage/', {
        templateUrl: '/static/teams/partials/manage.html',
        controller: 'ManageCtrl as manage'
      })
      .when('/manage/:team_key', {
        templateUrl: '/static/teams/partials/manage_team.html',
        controller: 'ManageTeamCtrl as manage'
      })
      .otherwise({
        redirectTo: '/overview/'
      });
  }])
  .run(function($rootScope, oAuth) {
	  angular.element(document.querySelectorAll(".hidden.container")).removeClass("hidden");
	  angular.element(document.querySelector("div.spinner")).addClass("hidden");
	  oAuth.check();
	});
