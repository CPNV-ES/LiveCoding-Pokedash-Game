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
        3 = opendoor
        4 = boulder
        5 = tree
        9 = road (case vide)
    */
   
    pattern: [
        [5,9,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,1,9,2,9,4,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,0,9,5,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
    ],

    e: {
        0: Protagonist, //There can be only one protagonist in the pattern
        1: Pokeball,
        2: Door, //There can be only one Door actually
        4: Boulder,
        5: Tree,
        9: Road
    }
}
