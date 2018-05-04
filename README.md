# Arcade-Game
### Author: Anca Gaboreanu

The **arcade game** is a game where you have a Player and Enemies (Bugs).
The main objective of the player is to reach the water, without colliding with the enemies.
The player can move, up-down-left-right

In order to play or make changes you can clone or download Zip file the repository from 

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)
* [Play-Game](#play-game)


## Instructions 

To see specific instructions of Udacity: (https://review.udacity.com/#!/rubrics/591/view).

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Play-Game

Open index.html with your favorite browser.

The game starts with face down cards.
In order to play you have to open two cards at a time to see if they are equal.
If these cards are the same, ie they have the same image, they will remain open, otherwise there will be a removal of the opening.

The cards symbols in the JavaScript file (`js/app.js`): 

`` ` let listCards = ["fa-diamond", "fa-paper-plane-o", "fa-anchor",  "fa-bolt",  "fa-cube",  "fa-anchor", "fa-leaf", "fa-bicycle", "fa-diamond",  "fa-bomb",  "fa-leaf", "fa-bomb",  "fa-bolt", "fa-bicycle",  "fa-paper-plane-o", "fa-cube"]; 
`` `

The cards are shuffled through the shuffle function:

`` `function shuffle(array) {
    ...... 
        while (currentIndex !== 0) {
    .....
         }  
     return array; 
     } 
     shuffle(listCards); ` `` 
     
During the game the moves will be recorded, the moves are connected to the stars, the duration of the game
     
## Game-Over 

You win when you find all the pairs.

To win the game you must match 8 cards. You lose a star after 10 moves, and another one after 20 moves.

At the end a modal will open containing the stars, moves and time during the game.

Have fun playing !
