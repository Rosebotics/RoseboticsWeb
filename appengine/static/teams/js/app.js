'use strict';

angular.module('TeamApp', ['TeamControllers', 'ModalControllers', 'TeamServices', 
                           'ui.bootstrap', 'ngRoute', 'TeamDirectives'])
.run(function() {
  angular.element(document.querySelectorAll(".hidden.container")).removeClass("hidden");
  angular.element(document.querySelector("div.spinner")).addClass("hidden");
})
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/overview/', {
        templateUrl: '/static/teams/partials/overview.html',
        controller: 'OverviewCtrl as overview'
      })
      .when('/teams/', {
        templateUrl: '/static/teams/partials/teams.html',
        controller: 'TeamsCtrl as teams'
      })
      .when('/invites/', {
        templateUrl: '/static/teams/partials/invites.html',
        controller: 'InvitesCtrl as invites'
      })
      .when('/manage/', {
        templateUrl: '/static/teams/partials/manage.html',
        controller: 'ManageCtrl as manage'
      })
      .otherwise({
        redirectTo: '/overview/'
      });
  }]);
