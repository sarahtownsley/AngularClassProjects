var app = angular.module("FavoriteOrganization", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl: "templates/home.html",
        controller: "HomeController"
    }).when("/about", {
        templateUrl: "templates/about.html",
        controller:"AboutController"
    }).when("/why", {
        templateUrl: "templates/why.html",
        controller: "WhyController"
    }).otherwise({
        redirectTo: "/"
    });
});


app.controller("HomeController", ["$scope", function ($scope) {
    
    $scope.name = "The Humane Society of Utah";
    $scope.image = "https://pbs.twimg.com/profile_images/555864444438192129/WrR1ff-I.jpeg"
}]);


app.controller("AboutController", ["$scope", function($scope) {
    
    
}]);

app.controller("WhyController", ["$scope", function($scope) {
    
    
}]);

