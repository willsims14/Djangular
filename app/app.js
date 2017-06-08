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
      // .when('/types', {
      //   controller: 'ProductTypesController',
      //   templateUrl: 'bangaclient/products/producttypes.html'
      // });
  }
]);


