import { Boulder } from '../elements/Boulder'
import { Door } from '../elements/Door'
import { Protagonist } from '../elements/Protagonist'
import { Objective } from '../elements/Objective'
import { Road } from '../elements/Road'
import { Tree } from '../elements/Tree'

export default {
    // NEMO OR DORI FIRST LEVEL
    /* 
        0 = PlayableCharacter
        1 = objective (objectif)
        2 = door
        3 = boulder
        4 = tree
        9 = road (case vide)
    */
    name: 'nemo',
    template: 'nemo',
    background: '#3a7eea',
    music: 'nemo.mp3',
   
    pattern: [
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
        [4,9,9,4,1,9,9,9,4,9,9,9,9,9,9,4],
        [4,9,9,4,4,9,4,9,4,9,9,9,9,9,3,9],
        [4,9,9,3,9,9,9,9,4,9,3,3,3,3,9,4],
        [4,9,9,9,3,4,9,9,4,9,3,1,9,9,3,9],
        [4,9,9,9,9,4,9,9,4,9,3,1,9,3,9,4],
        [4,4,9,9,9,9,4,2,4,9,3,3,3,3,1,4],
        [4,9,9,9,4,9,9,9,4,0,1,9,9,3,3,4],
        [4,4,4,4,4,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,4,4,4,1,4,4,4],
        [4,9,9,9,9,9,9,9,9,4,1,4,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,4,9,4,4,4,9,4],
        [4,3,3,9,9,9,3,9,9,4,9,4,9,3,9,4],
        [4,1,3,9,3,9,9,9,9,4,9,9,3,9,9,4],
        [4,9,1,9,3,9,9,1,3,1,9,9,9,3,9,4],
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
    ],

    e: {
        0: Protagonist, //There can be only one protagonist in the pattern
        1: Objective,
        2: Door, //There can be only one Door actually
        3: Boulder,
        4: Tree,
        9: Road
    }
}
