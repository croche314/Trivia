var app = angular.module('app', ['ngRoute']);

// *********** ROUTES ***********
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/partials/dashboard.html',
		controller: 'DashboardController'
	})
	.when('/new/question', {
		templateUrl: '/partials/new_question.html',
		controller: 'QuestionController'
	})
	.when('/play', {
		templateUrl: '/partials/play.html',
		controller: 'GameController'
	})
	.when('/logout', {
		templateUrl: '/partials/dashboard.html',
		controller: 'DashboardController'
	})
})