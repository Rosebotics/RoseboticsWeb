angular.module('TeamDirectives', [])
.directive('teamTitle', function() {
  return {
    restrict: 'E',
    scope: {
      team: '='
    },
    templateUrl: '/static/teams/partials/components/team_title.html'
  };
})
.directive('routeLoadingIndicator', ['$rootScope', function($rootScope) {
  return {
    restrict: 'E',
    templateUrl: '/static/teams/partials/components/loading_spinner.html',
    link: function(scope, elem, attrs) {

      $rootScope.$on('$routeChangeStart', function(){
        $rootScope.isRouteLoading = true;
      });

      $rootScope.$on('$routeChangeSuccess', function(){
        $rootScope.isRouteLoading = false;
      });
    }
  };
}])
.filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}]);;
