var player = {
    name: 'Mario',
    totalCoins: 0,
    status: 'Small',
    star: false,
    setName: function (namePicked) {
        this.name = namePicked;
    },
    gotHit: function () {
        if (this.status === 'Powered Up') {
            this.status ='Big';
        } else if (this.status === 'Big') {
            this.status = 'Small';
        } else if (this.status ==='Small') {
            this.gameActive = false;
            this.status = 'Dead';   
        }
    },
    gameActive: true,
    gotPowerup: function () {
        if (this.status === 'Small') {
            this.status = 'Big';
        } else if (this.status === 'Big') {
            this.status = 'Powered Up'
        }
    },
    addCoin: function () {
        this.totalCoins++;
    },
    print: function () {
        console.log('Name: ' + this.name + '\nTotal Coins: ' + this.totalCoins + '\nStatus: ' + this.status + '\nStar: ' + this.star);
    }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function play() {
    
    for (var i = 0; i < 3; i++) {

        var value = getRandomInt(0, 2);

        if (value === 0) {
            player.gotHit();
        } else if (value === 1) {
            player.gotPowerup();
        } else if (value === 2) {
            player.addCoin();
        }
        player.print();
    }
}

play();

