import { Element } from './Element'

export class StaticElement extends Element {

    constructor(game, x, y, img){
        super(game, x, y, img)
    }
}

// TO DELETE IF NOT USED : module.exports = StaticElement