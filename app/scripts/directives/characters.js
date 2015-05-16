'use strict';

angular.module('jsmnApp')
  .directive('jsmnCharacters', function (descriptions) {
    return {
      restrict: 'E',
      controller: function($element, $rootScope, $scope) {
          $scope._ = _
          console.log('controller here')
          return
      },
      link: function postLink(scope, element, attrs) {
        scope.text = "test";
        scope.characters = {}
        scope.activeChar = null

        // descriptions = _.indexBy(descriptions, 'id')

        for (var description in descriptions) {
            scope.characters[description] = descriptions[description];
            console.log(scope.characters);
        };

        scope.toggleCharacter = function (char) {
            scope.activeChar = char;
            console.log('active char is', char.name);
            return
        }
      }
    };
  });
