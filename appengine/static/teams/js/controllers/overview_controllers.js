angular.module('OverviewControllers', [])
.controller('OverviewCtrl', function() {
})
.controller('PreviewCtrl', function(oAuth, $location, sidebar, $rootScope, snackbar) {
	oAuth.check();
	this.signup = function() {
		oAuth.signin(false, function(authResult) {
			console.log(authResult);
			if (!authResult.error) {
				$location.path('/overview');
				sidebar.show.set(true);
			} else {
				snackbar.createWithTimeout("<b>Error!</b> Sign up failed");
			}
			$rootScope.$apply();
		});
	};
})
.controller('SidebarCtrl', function(sidebar, $location, $scope) {
	this.routes = sidebar.routes;
	this.show = sidebar.show.get();
	var self = this;
	$scope.$watch(function () { return sidebar.show.get(); },
			function (value) { self.show = value; });

	this.isActive = function(routeUrl) {
		var path = $location.path();
		routeUrl = routeUrl.substring(1);
		return path.startsWith(routeUrl);
	}
});
