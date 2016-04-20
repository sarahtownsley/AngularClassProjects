var app = angular.module("MyApp.ponyManager", []);

app.service('PonyManager', ['PonyFactory', 'FavoritePonies', 'FavoriteFlicks', function (PonyFactory, FavoritePonies, FavoriteFlicks) {

    // Pre-loaded ponies

    this.getPonies = function () {
        return PonyFactory;
    }

    this.getFavorites = function () {
        return FavoritePonies;
    }
    

    //Submit and delete favorite pony


    this.addPonyToFavorites = function (newPony) {
        FavoritePonies.push(newPony);
    }

    this.deletePonyFromFavorites = function (index) {
        FavoritePonies.splice(index, 1)
    }

    this.ponyValidator = function () {

    }
    
    //flicks
    
    this.getFlick = function () {
        return FavoriteFlicks;
    }
    
    this.addVideo = function (video) {
        FavoriteFlicks.push(video);
    }


}]);