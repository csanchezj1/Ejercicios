app.controller('productosCtrl', function ($scope, $http, $uibModal) {
    $http.get("https://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json").then(function (response) {
        $scope.myData = response.data.value;
    });

    $scope.animationsEnabled = true;

    $scope.abrirModalProducto = function (posicion) {

        $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/modalProductosCont.html',
            controller: 'ModalInstanceProductosCtrl',
            resolve: {
                
                items: function () {
                    return posicion;
                }
            }
        })
    }
});
