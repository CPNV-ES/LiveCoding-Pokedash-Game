import { StaticElement } from './StaticElement'

export class Door extends StaticElement{
    constructor(game, x, y, img){
        super(game, x, y, img)
        this.isOpen = false
    }

    action(information){
        console.log("bienvenue dans la méthode action de la classe Door")
        return true
    }

    open(){
        this.isOpen = true
        this.img = this.game.sketch.loadImage(`${this.game.assetsBasePath}/openDoorImg.png`)
        this.game.sketch.redraw()
    }

    close(){
        this.isOpen = false
        this.img = this.game.sketch.loadImage(`${this.game.assetsBasePath}/doorImg.png`)
        this.game.sketch.redraw()
    }
}