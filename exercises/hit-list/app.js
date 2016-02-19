var app = angular.module("HitList", []);


app.controller("ListController", ["$scope", "$http", function ($scope, $http) {


    $http.get('http://mean.codingcamp.us:6543/hitlist.json')
        .then(function (response) {
            $scope.hitList = response.data;
            //         console.log(response.data);
        });

}]);

//header has details about request
// .data is located the body of our request, which is why we use response.data.  We only want the data.