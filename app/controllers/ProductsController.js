"use strict";

angular.module('myapp').controller('ProductsController', [
  '$scope',
  '$http',
  '$location',
  'RootFactory',
  'apiUrl',
function($scope, $http, $location, RootFactory, apiUrl) {


    $http({
        url: `${apiUrl}/products`,
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            'Authorization': "Token " + RootFactory.getToken()
        }
    }).then(
        res => {
            RootFactory.setToken(res.data.token);
            if(res.data.token !== ""){
                $scope.products = res.data.results;
            }
        },
        console.error
    );



}]);