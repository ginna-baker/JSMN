'use strict';

angular
  .module('jsmnApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/characters', {
        templateUrl: 'views/characters.html',
        controller: 'CharactersCtrl'
      })
      .when('/timelines', {
        templateUrl: 'views/timelines.html',
        controller: 'MainCtrl'
      })
      .when('/contribute', {
        templateUrl: 'views/contribute.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
