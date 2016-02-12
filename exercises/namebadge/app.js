var app = angular.module("nameBadgeApp", []);

app.controller("MainController", ['$scope', function ($scope) {
    $scope.nameBadges = [
        {
            firstName: "Sarah",
            lastName: "Townsley",
            email: "exampleemail@email.com",
            birthPlace: "City, STATE",
            phone: "123-456-7890",
            food: "Favorite food",
            tellUs: "This is more information about me"
        }
    ];

    $scope.firstName = "";
    $scope.lastName = "";
    $scope.email = "";
    $scope.birthPlace = "";
    $scope.phone = "";
    $scope.food = "";
    $scope.tellUs = "";


    $scope.submit = function () {
        $scope.newThing = {
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            email: $scope.email,
            birthPlace: $scope.birthPlace,
            phone: $scope.phone,
            food: $scope.food,
            tellUs: $scope.tellUs
        }

        $scope.nameBadges.push($scope.newThing);
        $scope.newThing = {};
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.email = "";
        $scope.birthPlace = "";
        $scope.phone = "";
        $scope.food = "";
        $scope.tellUs = "";
    }

}]);