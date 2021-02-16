app.controller('productosCtrl', function ($scope, $http) {
    $http.get("https://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json").then(function (response) {
        $scope.myData = response.data.value;
    });
});

app.controller('productosModalCtrl', )
