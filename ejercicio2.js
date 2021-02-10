var app = angular.module("myApp", []);


app.controller('myCtrl', function ($scope) {
    $scope.arreglo1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
        $scope.arreglo2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        $scope.arregloSumado = [],
        $scope.sumarArreglos = function () {

            for (let index = 0; index < $scope.arreglo2.length; index++) {
                $scope.arregloSumado[index] = $scope.arreglo1[index] + $scope.arreglo2[index];

            }
            
        }
});
