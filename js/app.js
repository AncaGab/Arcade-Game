// Code for play game 
// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

    var score = document.querySelector('.score');
    var bugs = document.querySelector('.bugs-acc');
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

// Set the timer to the game
let resetTimer = 0;
let finalTime = document.querySelector(".finalTime");

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    this.x += this.speed * dt;
    //change their speed
    if (this.x > 550) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 500);
    }

    // collision with the Player and reset player
    if (player.x < this.x+70 && player.x+30 > this.x && player.y==this.y){
        player.x = 200;
        player.y = 380;
        bugs.innerHTML++;
    } 

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = "images/char-boy.png";
}

// method: update()
Player.prototype.update = function () {
    // Prevent player from leaving the game screen
    if (this.y > 380) {
        this.y = 380;
    }
    if (this.x > 400) {
        this.x = 400;
    }
    if (this.x < 0) {
        this.x = 0;
    }



     // Increase points when you reach water
    if (this.y < 0) {
        score.innerHTML++;
        
        if(score.innerHTML == 10) {
            showModal();
            stopTimer();
        finalTime.innerText = time.innerText;
        }
        this.x = 200;
        this.y = 380;
    }
};

// method: render()
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//method: handleInput()
Player.prototype.handleInput = function(keyPress) {
    switch (keyPress) {
        case 'left':
            this.x -= this.speed + 50;
            break;
        case 'up':
            this.y -= this.speed + 30;
            break;
        case 'right':
            this.x += this.speed +50;
            break;
        case 'down':
            this.y += this.speed +30;
            break;
    }
    if (resetTimer==0) {
        startTimer();
        resetTimer = 1;
    }
    
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var enemyPosition = [60, 140, 220];
var player = new Player(200, 380, 50);
var allEnemies = [];

enemyPosition.forEach(function(row) {
    var enemy = new Enemy(0, row, 100 + Math.floor(Math.random() * 500));
    allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//open modal

const modal = document.querySelector(".modal")

function showModal() {    //I open the modal at the end of the game
    modal.style.display = "block";

}


//function to start the game again when the modal opens

function restartGame() {    
  location.reload();
}

// start the timer
let time = document.querySelector('.time');

let seconds = document.querySelector('.seconds');
let minutes = document.querySelector('.minutes');

function startTimer() {    
    timer = setInterval(function() {
        seconds.innerText++;
        if(seconds.innerText == 60) {
            minutes.innerText++;
            seconds.innerText = 0;
        }
    },(1000));
}


//Stop the timer

function stopTimer() {  
  clearInterval(timer);
}
