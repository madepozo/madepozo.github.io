var angularCVApp = angular.module('angularCVApp', ['ngRoute']);

var courses = {
	1 : {
		name : 'Diseño y Desarrollo Web Online',
		duration : '3 meses de Contenido Online',
		certificate : '#',
	},
	2 : {
		name : 'Profesional de BackEnd',
		duration : '3 meses de Contenido Online',
		certificate : '#',
	},
	3 : {
		name : 'Programación en Android',
		duration : '3 meses de Contenido Online',
		certificate : '#',
	},
	4 : {
		name : 'Profesional de FrontEnd',
		duration : '3 meses de Contenido Online',
		certificate : '#',
	}
}

function mainController ($scope) {
	$scope.courses = courses;
	
}

angularCVApp.config( function ($routeProvider) {
	$routeProvider
		.when('/education', {
			templateUrl : 'pages/education.html',
			controller  : 'mainController'
		})
		.when('/skills', {
			templateUrl : 'pages/skills.html',
			controller  : 'skillsController'
		})
		.when('/projects', {
			templateUrl : 'pages/projects.html',
			controller  : 'projectsController'
		})
		.otherwise({
			redirectTo : '/'
		});
});

angularCVApp.controller('mainController', function ($scope) {
	$scope.title = 'Educación';
});

angularCVApp.controller('skillsController', function ($scope) {
	$scope.title = 'Habilidades';
});

angularCVApp.controller('projectsController', function ($scope) {
	$scope.title = 'Proyectos';
});