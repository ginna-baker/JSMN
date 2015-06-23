'use strict';

angular.module('jsmnApp')
  .directive('jsmnCharacters', function (descriptions) {
    return {
      restrict: 'E',
      controller: function($element, $rootScope, $scope) {
          return;
      },
      link: function postLink(scope, element, attrs) {
        scope.characters = {};
        scope.activeChar = null;

        for (var description in descriptions) {
            scope.characters[description] = descriptions[description];
        };

        scope.toggleCharacter = function (char) {
            scope.activeChar = char;
            return;
        };
      }
    };
  });
