var app = angular.module("pokeProfile");

app.service("Service", ["$http", function ($http) {
    var self = this;
    this.pokemon = [];
    
    this.grab = function (userInput) {
        self.pokemon=[];
        $http.get('http://pokeapi.co/api/v1/pokemon/' + userInput).then(function (response) {
            self.pokemon.push(response.data);
        });
    }

}]);

