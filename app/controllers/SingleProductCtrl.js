"use strict";

angular.module('myapp').controller('SingleProductCtrl', [
    '$scope',
    '$http',
    '$location',
    'RootFactory',
    'apiUrl',
    '$routeParams',
function($scope, $http, $location, RootFactory, apiUrl, $routeParams) {

    $scope.current_product = $routeParams;

    console.log("CURRENT PRODUCT: ", $scope.current_product);


    RootFactory.getApiRoot()
    .then( (root) => {
        $http({
            url: `${root.products}detail/${$scope.current_product.id}`,
            headers: {
            "Content-Type": "application/json",
            'Authorization': "Token " + RootFactory.getToken()
            },
        }).then( function(res) {
            console.log("Response: ", res.data);
            $scope.current_product = res.data;
        });
    });

    $scope.deleteProduct = function(prod_pk){

        RootFactory.getApiRoot()
        .then( (root) => {
            $http({
                url: `${root.products}detail/${$scope.current_product.id}`,
                method: 'DELETE',
                headers: {
                "Content-Type": "application/json",
                'Authorization': "Token " + RootFactory.getToken()
                },
            }).then( function(res) {
                console.log("Response: ", res);
                if (res.status === 204){
                    console.log("PRODUCT SUCCESSFULLY REMOVED");
                    $location.path('/products');
                }else{
                    console.log("ERROR REMOVING PRODUCT");
                    $location.path('/products');
                }
            });
        });

    };



}]);