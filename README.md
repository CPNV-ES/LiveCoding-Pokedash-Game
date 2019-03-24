# LiveCoding-Pokedash-Game

## Description
Pokedash is a game where the user has to code the logic of the game with a chosable programming language (php or ruby) to render a functionnable game.

You can check the main [LiveCoding application](https://github.com/CPNV-ES/LiveCoding).

## Goal
The goal of the game is to take all the objectives (objective) to open a door to access the next level. You will certainly need to move boulder to access to the objectives/door.

## Setup for development
> Be sure you have the last version of **[LiveCoding](https://github.com/CPNV-ES/LiveCoding)** installed

### Installation
```sh
# Clone this repo
git clone git@github.com:CPNV-ES/LiveCoding-Pokedash-Game.git

# Install the dependencies
cd LiveCoding-Pokedash-Game
npm i

# Install http server
npm i -g http-server
```
### Run the game
```sh
# Start the build tool (with hot reload)
npm run dev

# Build the game
npm run build

# Use a http server to access the game
http-server -p 3333 --cors -c-1

# Go to your LiveCoding/client repository
cd ~/LiveCoding/client
npm i
npm run serve
```

### Run the game without server
You can run the game from [cpnv-es.github.io/LiveCoding](https://cpnv-es.github.io/LiveCoding/)

Once in the page, change the Github loader (on the upper right) with the Pokedash Game : `CPNV-ES/LiveCoding-Pokedash-Game@master`

## v1.0.1 changelog

- Can use keys arrow in debug mode

## Elements
Pokedash game is generated in a 2D array. Each case of the array represents a specific element. 

Here is a list of all the **[elements](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blob/master/instructions/elements.md)** with their properties/constraints.

## Functions
Use the **[functions](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blob/master/instructions/functions.md)** at your disposal to create a playable game and find the way to the exit !

## Specificity of the "coding gameplay"
### Key Event
To begin an interaction with the game, you have to press a key which will return a keyCode. You have to call a function to listen to the key Event.

Here is the list of all **[keyEvent](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blob/master/instructions/keyEvents.md)** handled by the application.

### How to move
You have to handle each element in Pokedash. If you want to move right, you'll have first to check the element on your right then code an action depending of the element. 

### Example
You move with a 'keyCode' direction. If there is a 'Road' element, use the function `swapSprite(keyCode, 0, 1)` to intervert the protagonist with the road.

### Game Objectives
[Here](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blob/master/instructions/keyEvents.md) is a detailed list of each objective in the game.

### Code Examples
[Here](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blob/master/docs/examples/) are some hints and solutions if you are blocked.
