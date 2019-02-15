import { StaticElement } from './StaticElement'

export class Tree extends StaticElement{

    constructor(game, x, y, img){
        super(game, x, y, img)
    }

    action(information){
        console.log("bienvenue dans la méthode action de la classe Tree")
        return true
    }
}

// TO DELETE IF NOT USED : module.exports = Tree