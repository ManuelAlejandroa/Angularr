var aplicacion= angular.module("aplicacion",[]);

function ingresar($scope){

	$scope.matriculados = [{nombre:"danny"},{nombre:"luis"},{nombre:"cristian"}];

	$scope.agregarItem=function(){
		$scope.matriculados.push({nombre:"cristopher"},{nombre:"Juan"});
	}

	$scope.eliminarItem=function(){
		$scope.matriculados=[];
	}

	$scope.ingresarItem=function(){
		$scope.matriculados.push({nombre:$scope.nuevaPersona});
	}
}

aplicacion.controller("controlador",ingresar);

//apellidos,,curso y telefono
//pintarlo en una tabla y agragarle bootstrap