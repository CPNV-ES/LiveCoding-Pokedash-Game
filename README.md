# LiveCoding-Pokedash-Game

Use the **[functions](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game)** at your disposal to create a playable game and find the way to the exit !  


## v0.2.0 changelog

- Pokedash game now fully migrated from legacy LiveCoding platform

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

### Start Coding
Code in the web environnement to make a functionnal game with these **[functions](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game)**
