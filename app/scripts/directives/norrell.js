'use strict';
angular.module('jsmnApp')
  .directive('mrNorrell', function (descriptions) {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.character = descriptions['Norrell']
        scope.mouseIn = false;

        scope.onMouseEnter = function () {
            scope.mouseIn = true;
            return;
        }
        scope.onMouseLeave = function () {
            scope.mouseIn = false;
            return;
        }
      }
    };
  });
