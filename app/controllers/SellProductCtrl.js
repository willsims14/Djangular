"use strict";

angular.module('myapp').controller('SellProductCtrl', [
    '$scope',
    '$http',
    '$location',
    'RootFactory',
    'apiUrl',
    '$routeParams',
    '$log',
function($scope, $http, $location, RootFactory, apiUrl, $routeParams, $log) {

    $scope.product = {};

    console.log("Selling PRODUCT: ");


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



    $scope.create_product = function(event){

        console.log("Price: ", $scope.product.type);
        

        $http({
            url: `${apiUrl}/sell`,
            method: "POST",
            data: { 
                "price": $scope.product.price,
                "title": $scope.product.title,
                "description": $scope.product.description,
                "product_type": $scope.product.type,
                "customer": 1
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                'Authorization': "Token " + RootFactory.getToken()
            }
        }).then(
            res => {
                console.log("Response!!!: ", res);
                var user_token = "Token " + RootFactory.getToken();
                console.log("Response Token: ", res.data.token);
                console.log("RootFactory Token: ", user_token);
                if (res.data.token !== "") {
                    $location.path('/products');
                }
            },
            console.error
        );





    };





}]);