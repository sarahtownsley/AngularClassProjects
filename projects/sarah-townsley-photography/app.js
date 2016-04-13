var app = angular.module("myApp", ['ngRoute']);

app.controller("MainController", ["$scope", "$location", "$anchorScroll", function ($scope, $location, $anchorScroll) {


    // navigation

    $scope.scrollToHomeSection = function () {
        $(window).scrollTo($("#home"), 800, {});
    }

    $scope.scrollToAboutSection = function () {
        $(window).scrollTo($("#about"), 800, {});
    }

    $scope.scrollToPortfolioSection = function () {
        $(window).scrollTo($("#portfolio"), 800, {});
    }

    $scope.scrollToPricingSection = function () {
        $(window).scrollTo($("#pricing"), 800, {});
    }

    $scope.scrollToContactSection = function () {
        $(window).scrollTo($("#contact"), 800, {});
    }

    //    portfolio - family
    $scope.scrollToFamilyGallery = function () {
        $(document).ready(function () {
            $("#hide-family").click(function () {
                $("#family-gallery").hide(1000);
            });
            $("#family-photos").click(function () {
                $("#family-gallery").show(1000);
                $(window).scrollTo($("#family-gallery"), 800, {});
            });
        });
    };

    //    portfolio - kids
    $scope.scrollToKidGallery = function () {
        $(document).ready(function () {
            $("#hide-kid").click(function () {
                $("#kid-gallery").hide(1000);
            });
            $("#kid-photos").click(function () {
                $("#kid-gallery").show(1000);
                $(window).scrollTo($("#kid-gallery"), 800, {});
            });
        });
    };
    //    portfolio - pets
    $scope.scrollToPetGallery = function () {
        $(document).ready(function () {
            $("#hide-pet").click(function () {
                $("#pet-gallery").hide(1000);
            });
            $("#pet-photos").click(function () {
                $("#pet-gallery").show(1000);
                $(window).scrollTo($("#pet-gallery"), 800, {});
            });
        });
    };

    //    portfolio - nature
    $scope.scrollToNatureGallery = function () {
        $(document).ready(function () {
            $("#hide-nature").click(function () {
                $("#nature-gallery").hide(1000);
            });
            $("#nature-photos").click(function () {
                $("#nature-gallery").show(1000);
                $(window).scrollTo($("#nature-gallery"), 800, {});
            });
        });
    }

}]);