import { Boulder } from '../elements/Boulder'
import { Door } from '../elements/Door'
import { Protagonist } from '../elements/Protagonist'
import { Pokeball } from '../elements/Pokeball'
import { Road } from '../elements/Road'
import { Tree } from '../elements/Tree'

export default {
    // ZELDA FIRST LEVEL
    /* 
        0 = PlayableCharacter
        1 = pokeball (objectif)
        2 = door
        3 = boulder
        4 = tree
        9 = road (case vide)
    */
    template: 'zelda',
   
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

    e: {
        0: Protagonist, //There can be only one protagonist in the pattern
        1: Pokeball,
        2: Door, //There can be only one Door actually
        3: Boulder,
        4: Tree,
        9: Road
    }
}
