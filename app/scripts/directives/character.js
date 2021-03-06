'use strict';
angular.module('jsmnApp')
  .directive('jsmnCharacter', function (descriptions) {
    return {
      // require: ['jsmnCharacters'], REVISIT
      scope: false,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.mouseIn = false;

        scope.onMouseEnter = function () {
            scope.mouseIn = true;
            return;
        }
        scope.onMouseLeave = function () {
            scope.mouseIn = false;
            scope.activeChar = null;
            return;
        }
      }
    };
  });
