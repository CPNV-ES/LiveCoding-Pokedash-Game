import { Boulder } from './elements/Boulder'
import { Door } from './elements/Door'
import { Protagonist } from './elements/Protagonist'
import { Pokeball } from './elements/Pokeball'
import { Road } from './elements/Road'
import { Tree } from './elements/Tree'

const classes = {
    Boulder,
    Door,
    Protagonist,
    Pokeball,
    Road,
    Tree
}

export class DynamicElement{
    constructor (game, className, x, y, img){
        return new classes[className](game, x, y, img)
    }
}

