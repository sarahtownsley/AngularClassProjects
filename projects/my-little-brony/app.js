var app = angular.module("MyApp", [
    "MyApp.ponies",
    "MyApp.ponyManager"
]);

app.controller("MainController", ["$scope", "$http", "PonyManager", "$sce", function ($scope, $http, PonyManager, $sce) {

    $(document).ready(function () {

        $('.scrollbox').enscroll({
            horizontalScrolling: true,
            horizontalTrackClass: 'horizontal-track2',
            horizontalHandleClass: 'horizontal-handle2'
        });
        //enscroll jquery plugin for scrollbars: http://enscrollplugin.com/#demos

    });


    $scope.prePonies = PonyManager.getPonies();

    //submit favorite pony

    $scope.ponyArray = [];
    $scope.userFlick = [];
    
    $scope.ponyArray = PonyManager.getFavorites();
    
    $scope.favPonies = function () {
        $scope.ponyArray = PonyManager.getFavorites();

    }
    
    $scope.submit = function (newPony) {

        PonyManager.addPonyToFavorites(newPony);
        $scope.favPonies();
        $scope.newPony = {};

    }



    //delete favorite pony

    $scope.delete = function (index) {
        PonyManager.deletePonyFromFavorites(index);
    }


    //submit favorite flick
    
    $scope.trustSrc = $sce.trustAsResourceUrl;

    $scope.favFlicks = PonyManager.getFlick();
    

    $scope.submitFavFlick = function () {

    }

}]);