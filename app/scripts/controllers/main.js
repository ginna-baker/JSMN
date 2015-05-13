'use strict';
angular.module('jsmnApp')
    .controller('MainCtrl', function ($scope, descriptions) {
        $scope.characters = {};
        $scope.selectedCharacter = null;

        for (var description in descriptions) {
            $scope.characters[description] = descriptions[description];
            console.log($scope.characters.Norrell);
        };

        $scope.selectCharacter = function (character) {
            console.log('new selected char is: ' + character);
            $scope.selectedCharacter = character;
            return;
        };

    });
