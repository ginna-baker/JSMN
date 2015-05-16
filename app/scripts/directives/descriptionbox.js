'use strict';
angular.module('jsmnApp')
  .directive('descriptionBox', function () {
    return {
      scope: false,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
          console.log(scope)
          console.log(scope.activeChar);
          // element.text('this is the descriptionBox directive');
          return
      }
    };
  });
