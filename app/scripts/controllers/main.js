'use strict';

/**
 * @ngdoc function
 * @name companySiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the companySiteApp
 */
angular.module('companySiteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
