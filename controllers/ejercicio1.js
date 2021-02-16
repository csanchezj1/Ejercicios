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