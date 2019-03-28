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
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
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
