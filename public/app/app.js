(function() {
	var app = angular.module('app', ['ngResource', 'ngRoute']);

	app.config(function($routeProvider, $locationProvider) {
	// $locationProvider.html5Mode(true|false); or
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	$routeProvider
	.when('/', { 
		templateUrl: '/partials/main/main',
		controller: 'mvMainCtrl'
	});
});
})();