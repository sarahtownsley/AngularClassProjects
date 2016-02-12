var app = angular.module("Cartoons", []);

app.service("CartoonService", function () {

    this.cartoonList = [];

    this.addCartoon = function (cartoon) {
        this.cartoonList.push(cartoon)
    }


});

app.controller("CartoonController", ["$scope", "CartoonService", function ($scope, CartoonService) {

    $scope.cartoonList = CartoonService.cartoonList;

    $scope.updateCartoon = function () {
        var cartoon = {
            url: $scope.image,
            title: $scope.title,
            description: $scope.description
        }

        CartoonService.addCartoon(cartoon);
        $scope.image = "";
        $scope.title = "";
        $scope.description = "";
        $scope.cartoonList = CartoonService.cartoonList;
    }
    


}]);