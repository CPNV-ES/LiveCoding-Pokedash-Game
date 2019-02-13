import 'script-loader!p5/lib/p5.min.js'
import 'script-loader!p5/lib/addons/p5.dom.min.js'

console.warn('Game module loaded')

export class Game {

  constructor(el, assetsBasePath) {

    console.log('Game class called')
    this.el = el
    this.assetsBasePath = assetsBasePath

    this.p5 = new p5((sketch) => {
      sketch.setup = this.setup(sketch)
      sketch.draw = this.draw(sketch)
      sketch.keyPressed = this.keyPressed()
    }, el)
  }

  setup(sketch) {
    sketch.createCanvas(this.el.offsetWidth, this.el.offsetHeight)
  }

  draw(sketch) {
    sketch.background("#5E3F6B")
  }

}