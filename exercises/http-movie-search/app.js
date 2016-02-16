var app = angular.module("MovieSearch", []);

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {
    
    $scope.searchResults = [];
      
    var baseUrl = "http://www.omdbapi.com/?"
    
    $scope.search = function (title) {
        $http.get(baseUrl + "s=" + title + "&type=" + $scope.type + "&y=" + $scope.year).then(function (response) {
            $scope.searchResults = response.data.Search;
        })
    };
            
}]);

