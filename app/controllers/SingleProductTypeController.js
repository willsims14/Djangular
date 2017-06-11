"use strict";

angular.module('myapp').controller('SingleProductTypeController', [
    '$scope',
    '$http',
    '$location',
    'RootFactory',
    'apiUrl',
    '$routeParams',
function($scope, $http, $location, RootFactory, apiUrl, $routeParams) {

    $scope.current_type = $routeParams;



    // MAKE API CALL WITH PRODUCT TYPE ID

    RootFactory.getApiRoot()
    .then( (root) => {
        $http({
            url: `${root.products}type`,
            headers: {
            "Content-Type": "application/json",
            'Authorization': "Token " + RootFactory.getToken()
            },
            params:{
                'type_id': $scope.current_type.ID
        }}).then( function(res) {
            $scope.products = res.data.results;
        });
    });



}]);