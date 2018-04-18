

// Enemies our player must avoid

var Enemy = function () {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = 0;
    this.y = 80;
    this.speed = 1;
    this.width = 100;
    this.height = 70;
    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x * this.speed + 130 * dt;
    if (this.x > 505) {
        this.x = 0;
    }

    this.detectCollision();
};
//detect  collision
Enemy.prototype.detectCollision = function () {

    if (player.x + player.width >= this.x && player.x <= this.x + this.width && player.y >= this.y && player.y <= this.y + this.height) {

        console.log('collision');
        player.x = 525 / 2;
        player.y = 400;
        //document.location.reload();

    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    this.x = 525 / 2;
    this.y = 400;
    this.width = 70;
    this.height = 140;
    this.sprite = 'images/char-boy.png';
}

Player.prototype.update = function (keyPressed) {

    if (keyPressed === 'right' && this.x < 400) {
        this.x += 3;
    }

    else if (keyPressed === 'left' && this.x > 0) {
        this.x -= 3;
    }

    else if (keyPressed === 'up' && this.y > 0) {
        this.y -= 3;
    }

    else if (keyPressed === 'down' && this.y < 450) {
        this.y += 3;
    }

    if (player.y < 3) {
        alert('You Won!');
        document.location.reload();
    }


};

Player.prototype.handleInput = function (key) {
    this.update(key)
    return key;
}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var e1 = new Enemy();
var e2 = new Enemy();
var e3 = new Enemy();

e1.y = 60;
e1.x = 0;

e2.y = 150;
e2.x = 300;
e2.speed = 1.02;

e3.y = 220;
e3.x = 100;
e3.speed = 1.01;

allEnemies.push(e1);
allEnemies.push(e2);
allEnemies.push(e3);

var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

