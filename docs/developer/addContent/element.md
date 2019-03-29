# Add new element
## Description
Add a new element to interact with in game. 

For the procedure example, we want to add a new **Spike** element.

## Procedure

## 1. Create the class of the new element in `src/elements` 
`Spike.js`

## 2. Structure of the class file
```javascript
import { MovableElement } from './StaticElement' // Spike herits from MovableElement

export class Spike extends MovableElement{
    constructor(game, x, y, img){
        super(game, x, y, img)
        
        // We can add some specific variable to the class
        this.damage = 1
    }
    
    // We can add specific method to the element
    improveDamage(){
        if(this.damage > 0) this.damage += 5
        else this.damage = 1
    }
}
```

## 3. Declare it in your level map (`src/maps/yourMap.js`)
```javascript
import { Spike } from '../elements/Spike' // Import your new element class here
import { Boulder } from '../elements/Boulder'
import { Door } from '../elements/Door'
import { Protagonist } from '../elements/Protagonist'
import { Objective } from '../elements/Objective'
import { Road } from '../elements/Road'
import { Tree } from '../elements/Tree'

export default {
    name: 'default',
    template: 'pokemon',
    background: '#77ff33',
    music: 'pokemon.mp3', 

    // Spike will be assigned to number 5. You can put a 5 on the map where you want to add spike.
    pattern: [
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,5,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,5,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
    ],

    // Add a number assigned to the new element
    e: {
        0: Protagonist,
        1: Objective,
        2: Door,
        3: Boulder,
        4: Tree,
        5: Spike, // We assigned Spike to the number 5
        9: Road
    }
}

```

## 4. Import in the DynamicElement class (`src/DynamicElement.js`)
This is a factory class which will instanciate your element when called in Game.js

```javascript
import { Boulder } from './elements/Boulder'
import { Door } from './elements/Door'
import { Protagonist } from './elements/Protagonist'
import { Objective } from './elements/Objective'
import { Road } from './elements/Road'
import { Tree } from './elements/Tree'
import { Spike } from  './elements/Spike' // Add your import here

const classes = {
    Boulder,
    Door,
    Protagonist,
    Objective,
    Road,
    Tree,
    Spike // Add your new class here
}

export class DynamicElement{
    constructor (game, className, x, y, img){
        return new classes[className](game, x, y, img)
    }
}
```

## 5. Add a sprite
Each levels use a template in which there are all the sprites corresponding to the elements of the level.

If your level use the template `pokemon`, go in this folder and add your sprite (`assets/pokemon/`) :
- add a sprite named `spikeImg.png` (better with no background) 
- the game will resize your image. However, it's better to have lightweight image in a 64x64 pixel.

## 6. It's done !
Don't forget to add your new method in the [instructions](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blob/master/instructions/elements.md).

Your element is now ready to be loaded in the game !
