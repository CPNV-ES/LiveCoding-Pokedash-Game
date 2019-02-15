import { MovableElement } from './MovableElement'

export class Boulder extends MovableElement{
    constructor(sketch, x, y, img){
        super(sketch, x, y, img)
    }

    action(information){
        console.log("bienvenue dans la méthode action de la classe Boulder")
        console.log("Information: " + information)
        return true
    }

}

// TO DELETE IF NOT USED : module.exports = Boulder