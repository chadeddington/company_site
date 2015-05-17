'use strict';

/**
 * @ngdoc function
 * @name companySiteApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the companySiteApp
 */
angular.module('companySiteApp')
  .controller('PortfolioCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });