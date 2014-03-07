var angularCVApp = angular.module('angularCVApp', ['ngRoute']);

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
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'homeController'
		})
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

angularCVApp.controller('homeController', function ($scope) {
	$scope.title = 'Información';
});

angularCVApp.controller('educationController', function ($scope) {
	$scope.title = 'Educación';
});

angularCVApp.controller('skillsController', function ($scope) {
	$scope.title = 'Conocimientos';
	$('.category h4').hover(
		function () {
			$(this).parent('.category').find('.box-hover').css({'display':'block'});
		}, function () {
			$( this ).parent('.category').find('.box-hover').css({'display':'none'});
		}
	);	
});

angularCVApp.controller('projectsController', function ($scope) {
	$scope.title = 'Proyectos';
});