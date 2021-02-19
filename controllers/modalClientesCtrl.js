app.controller('ModalInstanceCtrlClientes', function ($uibModalInstance, $scope, $http, items) {
    $scope.idCliente = items;
    $http.get("https://services.odata.org/V3/Northwind/Northwind.svc/Customers?$filter=CustomerID%20eq%20%27"+$scope.idCliente+"%27&$format=json").then(function (response) {
        $scope.detalleCliente = response.data.value;
    });
    $scope.ok = function () {
        $uibModalInstance.close();
    };

    
});