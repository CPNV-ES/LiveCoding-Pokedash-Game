# Add new level
## Description
Add a new level in the game in less than 5 minutes !

For the example, we will create a new map called : `pokemonFinal.js`
## Procedure
## 1. Create the file map in `src/maps/`
Create your new file map : `src/maps/pokemonFinal.js`
## 2. Structure of the file
Copy/paste the template map named `src/maps/_roadTemplate.js` and modify the settings :

```javascript

// Import all elements you want to use in the game
import { Boulder } from '../elements/Boulder'
import { Door } from '../elements/Door'
import { Protagonist } from '../elements/Protagonist'
import { Objective } from '../elements/Objective'
import { Road } from '../elements/Road'
import { Tree } from '../elements/Tree'

export default {
    name: 'pokemonFinal',    // name of the map
    template: 'pokemon',    // we will use the pokemon template, already created
    background: '#77ff33',  // we set a green background
    music: '',   // We set no music because this level will start after the pokemons level, which already have a pokemon music. 

    // Draw and create your game ! (can take lot of time to make a difficult level)
    // Fill each array with a number representing an element
    pattern: [
        [4,4,4,4,4,4,4,4,4,1,4,4,4,4,4,4],
        [4,9,3,1,3,1,1,3,1,9,9,9,9,3,9,4],
        [4,9,9,9,4,1,1,3,1,3,9,3,9,3,9,4],
        [4,9,4,9,4,1,9,9,3,9,3,9,3,4,1,4],
        [4,9,4,9,4,3,9,3,9,3,9,9,9,3,9,9],
        [4,1,4,9,4,3,3,9,3,9,1,9,1,3,4,4],
        [4,9,4,1,4,3,9,3,4,4,4,4,4,9,3,4],
        [4,9,4,9,4,9,9,9,3,9,4,4,9,4,9,4],
        [4,9,4,9,4,3,4,3,4,9,4,4,9,2,9,4],
        [4,9,4,9,4,1,3,1,4,1,4,4,4,9,4,4],
        [4,1,4,9,4,1,1,1,4,1,4,9,4,9,4,4],
        [4,9,4,9,4,9,3,9,9,9,4,9,4,9,4,4],
        [4,9,4,9,4,3,9,3,4,9,4,9,4,9,4,4],
        [4,9,4,9,4,4,4,4,4,9,4,4,4,9,4,4],
        [4,0,4,9,9,9,9,9,9,9,9,9,9,9,4,4],
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
    ],

    // Elements of the map
    e: {
        0: Protagonist, //There can be only one protagonist in the pattern
        1: Objective,
        2: Door, //There can be only one Door actually
        3: Boulder,
        4: Tree,
        9: Road
    }
}
```
## 3. Import the level in `src/Game.js`
```javascript
// Import all your level here
import tutorial from './maps/pokemonTutorial'
import pokemonTutorial from './maps/pokemonTutorial';
import nemo from './maps/nemo';
import pokemon1 from './maps/pokemon1';
import zeldaGreen from './maps/zeldaGreen';
import davide from './maps/davide';
import zeldaRed from './maps/zeldaRed';
import pokemonFinal from './maps/pokemonFinal';


export class Game {
    /**
     *
     * @param {HTMLElement} el game base element
     * @param {String} assetsBasePath
     */
    constructor({ element, assetsBasePath, console }) {
```

## 4. Chose his level index
In the Game constructor, indicate when your level will be loaded (position):
```javascript
// Chose also the order of your levels here
this.levels = [
    pokemonTutorial,
    pokemon1,
    pokemonFinal, // We want to add pokemonFinal as the last levels of the pokemons levels
    nemo,
    zeldaGreen,
    zeldaRed,
    davide
]
```

## 5. It's done !
Your level is now created and will be loaded the next time in the game !