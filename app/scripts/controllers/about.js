'use strict';

/**
 * @ngdoc function
 * @name jsmnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jsmnApp
 */
angular.module('jsmnApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
