app.controller('clientesCtrl', function($scope, $http) {
  $http.get("https://services.odata.org/V3/Northwind/Northwind.svc/Customers?$format=json").then(function (response) {
      $scope.myData = response.data.value;
  });

  
});

