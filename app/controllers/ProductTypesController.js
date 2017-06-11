"use strict";

angular.module('myapp').controller('ProductTypesController', [
    '$scope',
    '$http',
    '$location',
    'RootFactory',
    'apiUrl',
    '$routeParams',
function($scope, $http, $location, RootFactory, apiUrl) {

    console.log("PROD TYPES");

    RootFactory.getApiRoot()
    .then( function(root){
        $http({
            url: `${root.product_type}`,
            headers: {
            'Authorization': "Token " + RootFactory.getToken()
            }
        }).then( function(response) {
            $scope.product_types = response.data.results;
        });
    });



    
}]);




