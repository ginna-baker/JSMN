'use strict';
angular.module('jsmnApp')
    .controller('MainCtrl', function ($scope, descriptions) {
        $scope.characters = {};
        $scope.selectedCharacter = null;
        $scope.mouseEnter = false;

        for (var description in descriptions) {
            $scope.characters[description] = descriptions[description];
            console.log($scope.characters.Norrell);
        };

        //this needs to be in directives
        // for (var character in $scope.characters) {
        //     character.mouseIn = false;
        //     character.onMouseEnter = function () {
        //         character.mouseIn = true;
        //         console.log 'mouse entered', character.name;
        //         return;
        //     }
        //     character.onMouseLeave = function() {
        //         console.log 'mouse entered', character.name;
        //         return;
        //     }
        // }

        $scope.selectCharacter = function (character) {
            console.log('new selected char is: ' + character);
            $scope.selectedCharacter = character;
            return;
        };

    });
