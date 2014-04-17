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

function mainController ($scope, $route) {
	$scope.accounts = accounts;
	$scope.$route = $route;
	$scope.description = 'Alumno en Mejorando.la, buscando ser un profesional de la web con los cursos de : Backend y Frontend Profesional, ' +
						 'Diseño Web, Diseño Gráfico y UX, Estrategia Digital y Marketing, Android, iOS y PHP con Laravel. '+
						 'Leyendo actualmente : "JAVASCRIPT: The Good Parts, Secrets of the JavaScript Ninja". Siempre en busca de nuevos retos, y con la motivación para aprender algo nuevo cada día.'
}

angularCVApp.config( function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'homeController',
			activetab   : 'home'
		})
		.when('/education', {
			templateUrl : 'pages/education.html',
			controller  : 'educationController',
			activetab   : 'education'
		})
		.when('/skills', {
			templateUrl : 'pages/skills.html',
			controller  : 'skillsController',
			activetab   : 'skills'
		})
		.when('/projects', {
			templateUrl : 'pages/projects.html',
			controller  : 'projectsController',
			activetab   : 'projects'
		})
		.otherwise({
			redirectTo : '/'
		});
});

angularCVApp.controller('homeController', function ($scope) {
	$scope.title = 'Información';
	$scope.info = 'Soy Manuel Del Pozo, tengo 23 años, acabo de concluir mis estudios en la Universidad de Lima, '+
	              'la carrera de Ing. de Sistemas. Ahora busco nuevos retos profesionales enfocado en el '+
	              'desarrollo de aplicaciones. Mis conocimientos y experiencia lo detallo en las siguientes opciones. '+
	              'Soy autodidacta, siempre estoy aprendiendo cosas nuevas cada día, quiero ser parte de un gran equipo '+
	              'de desarrollo para crear aplicaciones que involucre mucha tecnología. Pueden contactarme a través de los siguientes medios.'
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