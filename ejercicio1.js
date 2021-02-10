var app = angular.module("myApp", []);


app.controller('myCtrl', function ($scope) {
    $scope.jugador1 = "";
    $scope.jugador2 = "";
    $scope.opciones = [
        { opNombre: "Piedra", imagen: "images/Piedra.jpg" },
        { opNombre: "Papel", imagen: "images/Papel.jpg" },
        { opNombre: "Tijeras", imagen: "images/Tijeras.jpg" },
        { opNombre: "Lagarto", imagen: "images/Lagarto.jpg" },
        { opNombre: "Spock", imagen: "images/Spock.jpg" }
    ];
    $scope.mostrar = false;
    $scope.mostrarGanador1 = false;
    $scope.mostrarGanador2 = false;
    $scope.empate = false;

    $scope.iniciarJuego = function () {
        $scope.mostrar = !$scope.mostrar;
    }

    $scope.comparar = function () {
        if ($scope.opcionElegida1.opNombre == $scope.opcionElegida2.opNombre) {
            $scope.empate = function () {
                $scope.empate = !$scope.empate;
                $scope.mostrarGanador1 = false;
                $scope.mostrarGanador2 = false;
            }
        } else if ($scope.opcionElegida1.opNombre == "Piedra") {
            if ($scope.opcionElegida2.opNombre == "Tijeras" || $scope.opcionElegida2.opNombre == "Lagarto") {
                $scope.mostrarGanador1 = function () {
                    $scope.mostrarGanador1 = !$scope.mostrarGanador1;
                    $scope.mostrarGanador2 = false;
                    $scope.empate = false;
                }
            }
            else {
                $scope.mostrarGanador2 = function () {
                    $scope.mostrarGanador2 = !$scope.mostrarGanador2;
                    $scope.mostrarGanador1 = false;
                    $scope.empate = false;
                }
            }
        } else if ($scope.opcionElegida1.opNombre == "Papel") {
            if ($scope.opcionElegida2.opNombre == "Piedra" || $scope.opcionElegida2.opNombre == "Spock") {
                $scope.mostrarGanador1 = function () {
                    $scope.mostrarGanador1 = !$scope.mostrarGanador1;
                    $scope.mostrarGanador2 = false;
                    $scope.empate = false;
                }
            }
            else {
                $scope.mostrarGanador2 = function () {
                    $scope.mostrarGanador2 = !$scope.mostrarGanador2;
                    $scope.mostrarGanador1 = false;
                    $scope.empate = false;
                }
            }
        } else if ($scope.opcionElegida1.opNombre == "Tijeras") {
            if ($scope.opcionElegida2.opNombre == "Papel" || $scope.opcionElegida2.opNombre == "Lagarto") {
                $scope.mostrarGanador1 = function () {
                    $scope.mostrarGanador1 = !$scope.mostrarGanador1;
                    $scope.mostrarGanador2 = false;
                    $scope.empate = false;
                }
            }
            else {
                $scope.mostrarGanador2 = function () {
                    $scope.mostrarGanador2 = !$scope.mostrarGanador2;
                    $scope.mostrarGanador1 = false;
                    $scope.empate = false;
                }
            }
        } else if ($scope.opcionElegida1.opNombre == "Lagarto") {
            if ($scope.opcionElegida2.opNombre == "Papel" || $scope.opcionElegida2.opNombre == "Spock") {
                $scope.mostrarGanador1 = function () {
                    $scope.mostrarGanador1 = !$scope.mostrarGanador1;
                    $scope.mostrarGanador2 = false;
                    $scope.empate = false;
                }
            }
            else {
                $scope.mostrarGanador2 = function () {
                    $scope.mostrarGanador2 = !$scope.mostrarGanador2;
                    $scope.mostrarGanador1 = false;
                    $scope.empate = false;
                }
            }
        } else if ($scope.opcionElegida1.opNombre == "Spock") {
            if ($scope.opcionElegida2.opNombre == "Piedra" || $scope.opcionElegida2.opNombre == "Tijera") {
                $scope.mostrarGanador1 = function () {
                    $scope.mostrarGanador1 = !$scope.mostrarGanador1;
                    $scope.mostrarGanador2 = false;
                    $scope.empate = false;
                }
            }
            else {
                a$scope.mostrarGanador2 = function () {
                    $scope.mostrarGanador2 = !$scope.mostrarGanador2;
                    $scope.mostrarGanador1 = false;
                    $scope.empate = false;
                }
            }
        } else {
            $scope.mostrarGanador2 = function () {
                $scope.mostrarGanador2 = !$scope.mostrarGanador2;
                $scope.mostrarGanador1 = false;
                $scope.empate = false;
            }
        }
    }
});

