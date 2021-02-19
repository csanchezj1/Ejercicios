app.controller('clientesCtrl', function($scope, $http,$uibModal) {
  $http.get("https://services.odata.org/V3/Northwind/Northwind.svc/Customers?$format=json").then(function (response) {
      $scope.myData = response.data.value;
  });

  
  $scope.animationsEnabled = true;

  $scope.abrirModalCliente = function (CustomerID) {

      $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'views/modalClientesContenido.html',
          controller: 'ModalInstanceCtrlClientes',
          resolve: {
              
              items: function () {
                  return CustomerID;
              }
          }
      })
  }
});

