# Level Structure

Each level is defined in a specific map file. Those files contains a lot of informations so the game will load them easily and dynamically. On each map, you have to import the class element you want to load. You can check [here](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blob/master/docs/developer/addContent/level) how to add news levels to the game


Here is a full example of a map level :
```js
// Import all elements you want to use in the game

import { Boulder } from '../elements/Boulder'
import { Door } from '../elements/Door'
import { Protagonist } from '../elements/Protagonist'
import { Objective } from '../elements/Objective'
import { Road } from '../elements/Road'
import { Tree } from '../elements/Tree'

export default {
    // 
    /* 
        0 = playableCharacter
        1 = objective 
        2 = door
        3 = boulder
        4 = tree
        9 = road (empty element)
    
        To check the templates and musics disponible, check the assets folder or create your own assets.
    */

    name: 'default',    // name of the map
    template: 'pokemon',    // the asset's template
    background: '#77ff33',  // OPTIONNAL the background color
    music: 'pokemon.mp3',   // OPTIONNAL the level music

    // Represent the game map with each element inside
    pattern: [
        [0,3,9,9,9,9,1,9,9,4,4,1,1,4,1,4],
        [9,3,9,9,4,4,4,4,9,4,4,1,1,4,9,4],
        [4,9,4,4,9,9,9,4,9,9,3,9,4,1,9,1],
        [1,3,9,3,9,9,9,1,4,3,4,9,4,1,3,1],
        [4,9,4,4,4,4,4,9,4,9,4,9,9,4,9,4],
        [1,9,9,9,3,9,9,9,3,9,4,9,9,9,9,4],
        [4,4,9,9,9,4,9,4,4,1,4,4,4,9,9,4],
        [4,9,4,9,4,9,9,4,9,9,9,9,4,9,9,9],
        [9,9,4,4,9,9,4,4,1,3,1,9,4,4,3,9],
        [9,4,4,4,9,4,4,4,3,2,3,9,4,9,9,9],
        [9,9,4,4,9,3,9,4,1,3,1,9,4,9,9,9],
        [4,9,9,9,9,9,9,4,9,9,9,9,9,9,9,9],
        [9,9,4,4,4,4,4,4,4,4,4,4,9,4,4,4],
        [9,4,4,9,9,9,9,4,1,3,3,9,3,9,3,9],
        [9,9,4,9,4,9,1,3,9,9,9,3,9,3,9,9],
        [4,9,9,9,4,9,9,4,9,9,9,3,9,9,9,9]
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
- `import: ` the imports of the elements you want to use
- `name: ` the name of the map
- `template: ` contains all the sprites of the level
- `background: ` a background color (optionnal)
- `music: ` music played when the level is loaded (optionnal)
    - If you leave those empty, the game will set a default background and no music on the level (will continue playing the last music)

- `pattern: ` the pattern of the map
    - You have to create your own map pattern, which will represents the 2D array of your game. Each case will be a number associated to the element you want to display. Here is an example of a map pattern.
- `e: ` point to the class Element you want to load.
