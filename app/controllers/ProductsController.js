"use strict";

angular.module('myapp').controller('ProductsController', [
  '$scope',
  '$http',
  '$location',
  'RootFactory',
  'apiUrl',
function($scope, $http, $location, RootFactory, apiUrl) {

    // Authenticate user
    RootFactory.getApiRoot()
        .then( (root) => {
            $http({
                url: `${root.products}`,
                headers: {
                'Authorization': "Token " + RootFactory.getToken()
                }
            }).then( function(res) {
                $scope.products = res.data.results;
                console.log("Products: ", $scope.products);
            });
        });
    }]);