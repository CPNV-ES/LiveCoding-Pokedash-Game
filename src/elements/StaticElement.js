import { Element } from './Element'

export class StaticElement extends Element {

    constructor(sketch, x, y, img){
        super(sketch, x, y, img)
    }
}

// TO DELETE IF NOT USED : module.exports = StaticElement