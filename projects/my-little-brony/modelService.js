var app = angular.module("MyApp.ponies", []);

app.factory("PonyFactory", [function () {
    return [
        {
            ponyName: "Twilight Sparkle",
            imgUrl: "http://pre02.deviantart.net/8872/th/pre/i/2012/206/7/d/twilight_sparkle_by_hankofficer-d46dfaw.png"
    },
        {
            ponyName: "Applejack",
            imgUrl: "http://vignette4.wikia.nocookie.net/mlpfanart/images/f/ff/Applejack_3_by_xpesifeindx-d5gsde5.png/revision/latest?cb=20131015231355"
    },
        {
            ponyName: "Fluttershy",
            imgUrl: "http://vignette2.wikia.nocookie.net/mlp-gameloft/images/6/6a/Fluttershy_Vector.png/revision/latest?cb=20141214215316"
    },
        {
            ponyName: "Rarity",
            imgUrl: "http://1.bp.blogspot.com/-IrxWMAAa59Y/VJcwMUclj1I/AAAAAAAAAYo/WrLGJd5dc9I/s1600/Tumblr_mxzwafbm7w1s88ss5o1_1280.png"
    },
        {
            ponyName: "Pinkie Pie",
            imgUrl: "http://vignette4.wikia.nocookie.net/mlp-gameloft/images/a/a9/Pinkie_Pie_Vector.png/revision/latest?cb=20141214220055"
    },
        {
            ponyName: "Rainbow Dash",
            imgUrl: "http://img07.deviantart.net/5ecb/i/2012/217/5/e/rainbow_dash_has_a_cunning_plan_by_ponyengineer-d59m2wq.png"
    },
        {
            ponyName: "Spike",
            imgUrl: "http://vignette4.wikia.nocookie.net/mugen/images/b/b7/Spike_the_Dragon.png/revision/latest?cb=20130918052802"
    },

        {
            ponyName: "Apple Bloom",
            imgUrl: "http://img1.wikia.nocookie.net/__cb20120205140653/mlp/images/0/08/Castle_Creator_Apple_Bloom.png"
    },
        {
            ponyName: "Princess Celestia",
            imgUrl: "https://lh5.googleusercontent.com/-3z8MaGpvBYQ/U0NpGwU-P7I/AAAAAAAAAD0/BLyAcF4fJ4w/w875-h914/princess_celestia_by_kooner01-d50xbdc.png"
    },
        {
            ponyName: "Zecora",
            imgUrl: "http://th02.deviantart.net/fs70/PRE/i/2012/307/8/0/zecora_by_hawk9mm-d5bfzw0.png"
    },
        {
            ponyName: "Sweetie Belle",
            imgUrl: "http://vignette3.wikia.nocookie.net/p__/images/3/38/CastleCreator_SweetieBelle.png/revision/latest?cb=20130920063113&path-prefix=protagonist"
    },
        {
            ponyName: "Diamond Dazzle Tiara",
            imgUrl: "http://th05.deviantart.net/fs70/PRE/f/2012/224/2/b/diamond_tiara_looking_back_by_metatiara-d522okt.png"
    },
        {
            ponyName: "Cheerilee",
            imgUrl: "http://mylittlewiki.org/w/images/e/ef/G4-cheerilee2.jpg"
    },
        {
            ponyName: "Nightmare Moon",
            imgUrl: "http://th09.deviantart.net/fs70/PRE/i/2011/217/8/0/nightmare_moon_by_triox404-d45idzt.png"
    }

]


}]);

app.factory("FavoritePonies", [function () {
    return [
        {
            ponyImage: "http://1.bp.blogspot.com/-IrxWMAAa59Y/VJcwMUclj1I/AAAAAAAAAYo/WrLGJd5dc9I/s1600/Tumblr_mxzwafbm7w1s88ss5o1_1280.png",
            ponyName: "Rarity",
            ponyUsername: "Brony03"
        },
        {
            ponyImage: "http://img1.wikia.nocookie.net/__cb20120205140653/mlp/images/0/08/Castle_Creator_Apple_Bloom.png",
            ponyName: "AppleBloom",
            ponyUsername: "BroniesRock34"
        }
           ];
}]);


app.factory("FavoriteFlicks", [function () {
    return [
        {
            title: "Applejack",
            videoURL: "https://www.youtube.com/embed/6bLUTsYeemM",
            userName: "Brony123"
        }
    ];
}]);