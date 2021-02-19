app.controller('ModalInstanceProductosCtrl', function ($uibModalInstance, $scope, $http, items) {
    $scope.posicion = items;
    $http.get("https://services.odata.org/V3/Northwind/Northwind.svc/Products?$filter=ProductID%20eq%20"+$scope.posicion+"&$format=json").then(function (response) {
        $scope.detalleProducto = response.data.value;
    });
    $scope.ok = function () {
        $uibModalInstance.close();
    };

    
});