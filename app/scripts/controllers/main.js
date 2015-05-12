'use strict';

/**
 * @ngdoc function
 * @name jsmnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jsmnApp
 */
angular.module('jsmnApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
