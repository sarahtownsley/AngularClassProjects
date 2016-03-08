var app = angular.module("AdoptApp")

app.service("FindPetService", ['$http', function ($http) {
    var baseUrl = "http://api.petfinder.com/";
    var getPets = "pet.find";
    var api_key = "3eda3e0ac29ef55b44a083a107c18e5e";

    this.findPets = function (animal, location) {
        return $http.jsonp(baseUrl + getPets + "?callback=JSON_CALLBACK", {
            params: {
                "format": "json",
                "key": api_key,
                "animal": animal,
                "location": location, 
//                "size": "S"
            }
        }).then(function (data) {
            console.log(data);
            return data.data.petfinder.pets.pet;
        })
    };

}]);