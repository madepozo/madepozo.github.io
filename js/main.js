var angularCV = angular.module('angularCV', []);

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