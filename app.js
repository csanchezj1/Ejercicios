var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            template: "<h1>Inicio</h1><p>Seleccione una opcion</p>"
        })
        .when("/juego", {
            templateUrl: "views/ejercicio1.html",
            controller: "ejercicio1Ctrl"
        })
        .when("/sumaArreglos", {
            templateUrl: "views/ejercicio2.html",
            controller: "ejercicio2Ctrl"

        })
        .when("/sumaMaxMin", {
            templateUrl: "views/ejercicio3.html",
            controller: 'ejercicio3Ctrl'
        })

});

app.controller("ejercicio1Ctrl", function ($scope) {
    $scope.jugador = [{ nombre: "", opcion: "" }];
    $scope.opciones = [
        { opNombre: "Piedra", imagen: "images/Piedra.jpg" },
        { opNombre: "Papel", imagen: "images/Papel.jpg" },
        { opNombre: "Tijeras", imagen: "images/Tijeras.jpg" },
        { opNombre: "Lagarto", imagen: "images/Lagarto.jpg" },
        { opNombre: "Spock", imagen: "images/Spock.jpg" }
    ];
    $scope.inicio = false;

    $scope.iniciarJuego = function () {
        $scope.inicio = !$scope.inicio;
    }

    $scope.mostrarGanador = false;
    $scope.mensaje = "";

    $scope.comparar = function () {
        if ($scope.jugador.opcion[0].opNombre == $scope.jugador.opcion[1].opNombre) {
            $scope.mostrarGanador = !$scope.mostrarGanador;
            $scope.mensaje = "Empataron...!!!!  Han empatado. Juega el desempate."
        } else if ($scope.jugador.opcion[0].opNombre == "Piedra") {
            if ($scope.jugador.opcion[1].opNombre == "Tijeras" || $scope.jugador.opcion[1].opNombre == "Lagarto") {
                $scope.mostrarGanador = !$scope.mostrarGanador;
                $scope.mensaje = "Felicidades! Ha ganado " + $scope.jugador.nombre[0];
            }
            else {
                $scope.mostrarGanador = !$scope.mostrarGanador;
                $scope.mensaje = "Felicidades! Ha ganado " + $scope.jugador.nombre[1];
            }
        } else if ($scope.jugador.opcion[0].opNombre == "Papel") {
            if ($scope.jugador.opcion[1].opNombre == "Piedra" || $scope.jugador.opcion[1].opNombre == "Spock") {
         
                    $scope.mostrarGanador = !$scope.mostrarGanador;
                    $scope.mensaje = "Felicidades! Ha ganado " + $scope.jugador.nombre[0];

                
            }
            else {
               
                    $scope.mostrarGanador = !$scope.mostrarGanador;
                    $scope.mensaje = "Felicidades! Ha ganado " + $scope.jugador.nombre[1];
                
            }
        } else if ($scope.jugador.opcion[0].opNombre == "Tijeras") {
            if ($scope.jugador.opcion[1].opNombre == "Papel" || $scope.jugador.opcion[1].opNombre == "Lagarto") {
                
                    $scope.mostrarGanador = !$scope.mostrarGanador;
                    $scope.mensaje = "Felicidades! Ha ganado " + $scope.jugador.nombre[0];
                
            }
            else {
                    $scope.mostrarGanador2 = !$scope.mostrarGanador;
                    $scope.mensaje = "Felicidades! Ha ganado " + $scope.jugador.nombre[1];
                
            }
        } else if ($scope.jugador.opcion[0].opNombre == "Lagarto") {
            if ($scope.jugador.opcion[1].opNombre == "Papel" || $scope.jugador.opcion[1].opNombre == "Spock") {
                
                    $scope.mostrarGanador = !$scope.mostrarGanador;

                    $scope.mensaje = "Felicidades! Ha ganado " + $scope.jugador.nombre[0];
            }
            else {
                
                    $scope.mostrarGanador = !$scope.mostrarGanador;

                    $scope.mensaje = "Felicidades! Ha ganado " + $scope.jugador.nombre[1];
            }
        } else if ($scope.jugador.opcion[0].opNombre == "Spock") {
            if ($scope.jugador.opcion[1].opNombre == "Piedra" || $scope.jugador.opcion[1].opNombre == "Tijera") {
                
                    $scope.mostrarGanador = !$scope.mostrarGanador;
                    $scope.mensaje = "Felicidades! Ha ganado " + $scope.jugador.nombre[0];
                
            }
            else {
                
                    $scope.mostrarGanador = !$scope.mostrarGanador;
                    $scope.mensaje = "Felicidades! Ha ganado " + $scope.jugador.nombre[1];
                
            }
        } else {
           
                $scope.mostrarGanador = !$scope.mostrarGanador;

                $scope.mensaje = "Felicidades! Ha ganado " + $scope.jugador.nombre[1];
        }
    }
});
app.controller("ejercicio2Ctrl", function ($scope) {
    $scope.arreglo1 = [],
        $scope.arreglo2 = [],

        $scope.agregarNumeros1 = function () {
            if (!$scope.agregarNum) { return; }
            $scope.arreglo1.push($scope.agregarNum)
        }

    $scope.agregarNumeros2 = function () {
        if (!$scope.agregarNum) { return; }
        $scope.arreglo2.push($scope.agregarNum)
    }


    $scope.arregloSumado = [],
        $scope.sumarArreglos = function () {

            for (let index = 0; index < $scope.arreglo2.length; index++) {
                $scope.arregloSumado[index] = $scope.arreglo1[index] + $scope.arreglo2[index];

            }

        }
});

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

