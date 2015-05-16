'use strict';

/**
 * @ngdoc overview
 * @name companySiteApp
 * @description
 * # companySiteApp
 *
 * Main module of the application.
 */
angular
  .module('companySiteApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
