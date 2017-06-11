"use strict";

angular.module('myapp').controller('ShoppingCartCtrl', [
    '$scope',
    '$http',
    '$location',
    'RootFactory',
    'apiUrl',
function($scope, $http, $location, RootFactory, apiUrl) {



    RootFactory.getApiRoot()
        .then( (root) => {
            console.log(`${root.order}`);
            $http({
                url: `${root.order}`,
                headers: {
                "Content-Type": "application/json",
                'Authorization': "Token " + RootFactory.getToken()
                },
                params:{
                    'user_id': 45
                }
            }).then( function(res) {
                $scope.order = res.data.results[0];
            });
        });
    }]);

