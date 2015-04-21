angular.module('OverviewControllers', [])
.controller('OverviewCtrl', function() {
})
.controller('PreviewCtrl', function(oAuth, $location, sidebar, $rootScope, snackbar, userEmail) {
	oAuth.check().then(function() {
		$location.path('/overview');
		sidebar.show.set(true);
		$rootScope.$apply();
	});
	this.signup = function() {
		oAuth.signup().then(function() {
			oAuth.getUserEmail().then(function(userInfo) {
				if(userInfo.email !== userEmail) {
					snackbar.createWithTimeout("<b>Danger!</b> Signing up for teams with another account may cause errors!", 6000);
				}
			});
			$location.path('/overview');
			sidebar.show.set(true);
		}, function() {
			snackbar.createWithTimeout("<b>Error!</b> Sign up failed");
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
