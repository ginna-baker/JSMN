'use strict';
angular.module('jsmnApp')
    .controller('MainCtrl', function ($scope, descriptions) {
        $scope.characters = {};
        $scope.selectedCharacter = null;
        $scope.mouseEnter = false;

        // for (var description in descriptions) {
        //     $scope.characters[description] = descriptions[description];
        // };

    });
