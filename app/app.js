"use strict";

var app = angular.module('myapp', ['ngRoute'])
        .constant('apiUrl', "http://localhost:8000");

angular.module('myapp').config(
[
    '$interpolateProvider',
    '$routeProvider',
    function($interpolateProvider, $routeProvider) {

        $interpolateProvider.startSymbol('((');
        $interpolateProvider.endSymbol('))');

        $routeProvider
        .when('/', {
            controller: 'AuthController',
            templateUrl: '/partials/login.html'
        })
        .when('/products', {
            controller: 'ProductsController',
            templateUrl: '/partials/products.html'
        })
        .when('/products/:id/:title', {
            controller: 'SingleProductCtrl',
            templateUrl: '/partials/product-details.html'
        })
        .when('/product-types', {
            controller: 'ProductTypesController',
            templateUrl: '/partials/product-types.html'
        })
        .when('/product-types/:ID/:label', {
            controller: 'SingleProductTypeController',
            templateUrl: '/partials/product-types-detail.html'
        })
        .when('/cart', {
            controller: 'ShoppingCartCtrl',
            templateUrl: '/partials/shopping_cart.html'
        })
        .when('/sell', {
            controller: 'SellProductCtrl',
            templateUrl: '/partials/sell_product.html'
        });
    }
]);


