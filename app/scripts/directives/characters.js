'use strict';

angular.module('jsmnApp')
  .directive('jsmnCharacters', function (descriptions) {
    return {
      restrict: 'E',
      controller: function($scope) {
          console.log('controller here')
          return
      },
      link: function postLink(scope, element, attrs) {
        scope.text = "test";
        scope.characters = {}
        scope.activeChar = null

        for (var description in descriptions) {
            scope.characters[description] = descriptions[description];
            console.log(scope.characters);
        };

        scope.toggleCharacter = function (charName) {
            scope.activeChar = charName;
        }
      }
    };
  });
