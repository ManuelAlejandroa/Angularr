var app=angular.module("alumnos",[]);
function funcionAlumnos ($scope){
	$scope.listaAlumnos=[{nombres:"Jonathan Zhunaula", telefono:"2107534", materia:"Programacion Avanzada"}, {nombres:"Manuel", telefono:"0997229909", materia:"Matematicas"}];
	$scope.visualizar = false;
	$scope.agregarAlumno=function(){
		$scope.listaAlumnos.push({nombres:$scope.nombres, telefono:$scope.telefono, materia:$scope.materia})
		$scope.nombres="";
		$scope.telefono="";
		$scope.visualizar = false;
	};

	$scope.activar = function(){

		$scope.visualizar = true;

	};

	$scope.ordenar = function(tipo){
		$scope.ordenado = tipo;
	}
	
}
app.controller('controlador', funcionAlumnos);
