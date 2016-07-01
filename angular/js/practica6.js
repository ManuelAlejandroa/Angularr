var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){

	$routeProvider
	.when('/p1', {templateUrl:'pagina1.html'})
	.when('/p2', {templateUrl:'pagina2.html'})
	.when('/p3', {templateUrl:'pagina3.html'})
	.when('/p4', {templateUrl:'pagina4.html'})
	.when('/p5', {templateUrl:'pagina5.html'})
	.otherwise({ redirectTo:'/p1/'});
	
});

app.factory('listanombres', function(){
	return [{nombre:"Manuel"},{nombre:"Diana"},{nombre:"Raisa"}];

});

app.factory('listaDiccionario', function(){
	return [{nombres:"Jonathan Zhunaula", telefono:"2107534", materia:"Programacion Avanzada"}, 
			{nombres:"Manuel Aguinsaca", telefono:"0997229909", materia:"Matematicas"}, 
			{nombres:"Saul Narvaez", telefono:"1564561468", materia:"Etica"}];
})

function verificar($scope) {

	$scope.nombre = 'Jose';

}

app.controller('controlador', verificar);