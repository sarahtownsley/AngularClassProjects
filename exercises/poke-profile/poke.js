var app = angular.module("pokeProfile", []);

app.controller("PokeController", ["$scope", "Service", function ($scope, Service) {

    $scope.userInput = null;
    $scope.pokemon = Service.pokemon;
    $scope.image = null;

    $scope.submit = function (userInput) {
        Service.grab($scope.userInput);
        $scope.pokemon = Service.pokemon;
        $scope.image = 'http://pokeapi.co/media/img/' + $scope.userInput + '.png';
    }


}]);