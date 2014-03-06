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

var accounts = {
	1 : {
		'url' : 'https://facebook.com/madepozo',
		'class' : 'icon-facebook'
	},
	2 : {
		'url' : 'https://twitter.com/madepozo',
		'class' : 'icon-twitter'
	},
	3 : {
		'url' : 'https://plus.google.com/112057101667217560964/',
		'class' : 'icon-google-plus'
	},
	4 : {
		'url' : 'https://www.linkedin.com/in/madepozo',
		'class' : 'icon-linkedin'
	},
	5 : {
		'url' : 'https://github.com/madepozo',
		'class' : 'icon-github'
	}
} 

function mainController ($scope) {
	$scope.accounts = accounts;
}

angularCVApp.config( function ($routeProvider) {
	$routeProvider
		.when('/education', {
			templateUrl : 'pages/education.html',
			controller  : 'educationController'
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

angularCVApp.controller('educationController', function ($scope) {
	$scope.title = 'Educación';
});

angularCVApp.controller('skillsController', function ($scope) {
	$scope.title = 'Conocimientos';
});

angularCVApp.controller('projectsController', function ($scope) {
	$scope.title = 'Proyectos';
});