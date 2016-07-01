var app1= angular.module("primero",[]);
app1.controller("nombrar", function($scope){

	$scope.nombres = "Alexander";
	$scope.apellidos = "Aguirre";

	$scope.lista=['alex','luis','cristian'];

	$scope.diccionario = [{dia:"lunes",ingles:"monday"},
	{dia:"martes",ingles:"tuesday"},{dia:"miercoles",ingles:"wenesday"}];

	$scope.materias = [{m:"programacion"},{m:"arquitectura"},{m:"contabilidad"},
	{m:"ética"},{m:"estadística"}];
});
