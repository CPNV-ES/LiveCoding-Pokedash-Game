import { MovableElement } from './MovableElement'

export class Pokeball extends MovableElement{
    constructor(game, x, y, img){
        super(game, x, y, img)
        this.isObjective = true
    }
}