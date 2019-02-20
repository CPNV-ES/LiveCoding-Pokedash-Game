import { Boulder } from '../elements/Boulder'
import { Door } from '../elements/Door'
import { Protagonist } from '../elements/Protagonist'
import { Pokeball } from '../elements/Pokeball'
import { Road } from '../elements/Road'
import { Tree } from '../elements/Tree'

export default {
    
    /* 
        0 = PlayableCharacter
        1 = pokeball (objectif)
        2 = door
        3 = boulder
        4 = tree
        9 = road (case vide)
    */
   
    pattern: [
        [4,4,9,4,4,4,4,4,4,4,4,4,4,4,4,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,1,9,2,9,3,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,1,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,0,9,4,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,4,4,4,4,4,4,4,4,9,4,4,4,4,4,4]
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
