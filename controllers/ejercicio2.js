app.controller("ejercicio2Ctrl", function ($scope) {
    $scope.arreglo1 = [];
    $scope.arreglo2 = [];
    
    $scope.agregarNumeros1 = function () {
        if (!$scope.agregarNum) { return; }
        $scope.arreglo1.push($scope.agregarNum)
        
    }

    $scope.agregarNumeros2 = function () {
        if (!$scope.agregarNum1) { return; }
        $scope.arreglo2.push($scope.agregarNum1)
    }

    $scope.llenarAleatorio = function () {
        $scope.arreglo1.push(Math.floor(Math.random()* (1000 - 0)) + 0);
        $scope.arreglo2.push(Math.floor(Math.random()* (1000 - 0)) + 0);       
    }

    $scope.arregloSumado = [];
    $scope.sumarArreglos = function () {

        for (let index = 0; index < $scope.arreglo2.length; index++) {
            $scope.arregloSumado[index] = $scope.arreglo1[index] + $scope.arreglo2[index];

        }

    }
});
