import { MovableElement } from './MovableElement'

export class Protagonist extends MovableElement {
    constructor(game, x, y, img){
        super(game, x, y, img)
        this.isProtagonist = true
        this.pokeball = 0
    }
}
