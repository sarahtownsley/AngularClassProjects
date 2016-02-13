var app = angular.module("ToDoApp", []);

app.controller("MainController", ['$scope', '$http', function ($scope, $http) {
    var baseUrl = "http://mean.codingcamp.us/sarah-townsley/todo/";


    $scope.newToDo = {
        title: undefined, // this one is the only thing that is actually required
        description: undefined,
        price: undefined, // Must be a number of some kind (integer or float)
        imgUrl: undefined,
        completed: false // must be a boolean (true or false)
    };

    $http.get(baseUrl).then(function (response) {
        $scope.myToDos = response.data;
        console.log(response.data)
    })
    
    
    
    $scope.addToDo = function () {
        $http.post(baseUrl, $scope.newToDo).then(function (response) {
            $scope.myToDos.push(response.data);
            console.log($scope.myToDos);
        }, function (error) {
            console.log(error);
        })
    }
    
    $scope.deleteToDo = function (index) {
        var id = $scope.myToDos[index]._id;
        $http.delete(baseUrl + id).then(function (response) {
            $scope.myToDos.splice(index, 1);
        })
    }
    
    $scope.updateToDo = function(index) {
        var toDo = $scope.myToDos[index]
        $http.put(baseUrl + toDo._id, toDo).then(function (response) {
            $scope.myToDos[index] = response.data;
            console.log(response.data)
        })
    }
    
}]);