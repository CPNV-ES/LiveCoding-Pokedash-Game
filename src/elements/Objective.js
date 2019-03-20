import { MovableElement } from './MovableElement'

export class Objective extends MovableElement{
    constructor(game, x, y, img){
        super(game, x, y, img)
        this.isObjective = true
    }
}