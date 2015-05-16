'use strict';

/**
 * @ngdoc function
 * @name companySiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the companySiteApp
 */
angular.module('companySiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
