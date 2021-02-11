var app = angular.module("myApp", []);

app.controller('ejercicio3Ctrl', function ($scope) {
    $scope.listaNumeros = [];


    $scope.agregarNumeros = function () {
        if (!$scope.agregarNum) { return; }
        $scope.listaNumeros.push($scope.agregarNum)
    }

    $scope.sumarNumeros = function () {
        if ($scope.listaNumeros == "") {
            alert("El arreglo esta vacio");
        }

        $scope.llenarAleatorio = function () {
            $scope.listaNumeros.push(Math.floor(Math.random()* (1000 - 0)) + 0);
           
        }

        $scope.min = $scope.listaNumeros[0];
        $scope.max = $scope.listaNumeros[0];

        for (let index = 0; index < $scope.listaNumeros.length; index++) {

            if ($scope.listaNumeros[index] < $scope.min) {
                $scope.min = $scope.listaNumeros[index];
            }
            if ($scope.listaNumeros[index] > $scope.max) {
                $scope.max = $scope.listaNumeros[index];
            }

        }
        $scope.sumaMax = 0;
        for (let i = 0; i < $scope.listaNumeros.length; i++) {
            $scope.sumaMax = $scope.sumaMax + $scope.listaNumeros[i];
        }

        $scope.sumaMin = 0;
        for (let j = 0; j < $scope.listaNumeros.length; j++) {
            $scope.sumaMin = $scope.sumaMax - $scope.max;
        }
    }
});