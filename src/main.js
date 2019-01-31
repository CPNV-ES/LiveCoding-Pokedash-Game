import * as p5 from 'p5'
import PokedashGame from './PokedashGame'

class Game {

    constructor (el, assetsBasePath) {

        this.el = el
        this.assetsBasePath = assetsBasePath

        this.p5 = new p5((sketch) => {
            sketch.setup = this.setup(sketch)
            sketch.draw = this.draw(sketch)
            sketch.keyPressed = this.keyPressed()
        }, el)
    }

    setup (sketch) {
        sketch.createCanvas(this.el.offsetWidth, this.el.offsetHeight) 
    }

    draw (sketch) {
        sketch.background("#5E3F6B")
    }

}