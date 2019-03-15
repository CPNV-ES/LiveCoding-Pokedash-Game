# LiveCoding-Pokedash-Game

## Description
Pokedash is a game where the user has to code the logic of the game with a chosable programming language (php or ruby) to render a functionnable game.

## Goal
The goal of the game is to take all the objectives (pokeball) to open a door to access the next level. You will certainly need to move boulder to access to the objectives/door.

## Setup for development
> Be sure you have the last version of **[LiveCoding](https://github.com/CPNV-ES/LiveCoding)** installed

### Installation
```sh
# Clone this repo
git clone git@github.com:CPNV-ES/LiveCoding-Pokedash-Game.git

# Install the dependencies
cd LiveCoding-Pokedash-Game
npm i
```
### Run the game
```sh
# Start the build tool (with hot reload)
npm run dev

# Build the game
npm run build

# Use a http server to access the game
npm i -g http-server
http-server -p 3333 --cors -c-1

# Go to your LiveCoding/client repository
cd ~/LiveCoding/client
npm run serve
```

## v0.2.0 changelog

- Pokedash game now fully migrated from legacy LiveCoding platform

## Start Coding

## Elements
Pokedash game is generated in a 2D array. Each case of the array represents a specific element. 

Here is a list of all the **[elements](#)** with their properties/constraints.

## Functions
Use the **[functions](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blob/master/docs/functions.md)** at your disposal to create a playable game and find the way to the exit !

## Specificity of the "coding gameplay"
### Key Event
To begin an interaction with the game, you have to press a key which will return a keyCode. There is a keyListener listening all keyUp events. 

Here is the list of all **[keyEvent](#)** handled by the application.

### How to move
You have to handle each element in Pokedash. You don't have functions to move left or right. If you want to move right, you'll have to check the element on your right and then code an action depending of the element. 

### Example
You move with 'keyCode' direction. If there is a 'Road' element, use the function `swapSprite(keyCode, 0, 1)` to intervert the protagonist with the road.

### Help
[Here](#) (not disponible yet)