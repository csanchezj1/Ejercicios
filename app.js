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
        .when("/clientes", {
            templateUrl: "views/clientes.html",
            controller: "clientesCtrl"

        })
        .when("/productos", {
            templateUrl: "views/productos.html",
            controller: "productosCtrl"
        })
        
});

