import { StaticElement } from './StaticElement'

export class Tree extends StaticElement{

    constructor(sketch, x, y, img){
        super(sketch, x, y, img)
    }

    action(information){
        console.log("bienvenue dans la méthode action de la classe Tree")
        return true
    }
}

// TO DELETE IF NOT USED : module.exports = Tree