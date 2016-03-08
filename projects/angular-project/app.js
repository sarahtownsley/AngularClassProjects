var app = angular.module("AdoptApp", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "views/whyadopt.html",
        controller: "MainController"
    }).when("/search", {
        templateUrl: "views/search.html",
        controller: "SearchController"
    }).when("/dogfacts", {
        templateUrl: "views/dogfacts.html",
        controller: "FactsController"
    }).when("/resources", {
        templateUrl: "views/resources.html",
        controller: "ResourcesController"
    });
}]);

app.controller("MainController", ['$scope', function ($scope) {


}]);

app.controller("SearchController", ['$scope', '$http', 'FindPetService', function ($scope, $http, FindPetService) {
    $scope.animal = null;
    $scope.location = null;

    $scope.submitPet = function (animal, location) {

        FindPetService.findPets($scope.animal, $scope.location).then(function (data) {
            $scope.petList = data;
            console.log($scope.petList);
        })

    }

}]);

app.controller("FactsController", ['$scope', function ($scope) {


}]);

app.controller("ResourcesController", ['$scope', function ($scope) {

}]);