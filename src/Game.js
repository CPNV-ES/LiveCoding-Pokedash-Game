import { DynamicElement } from './DynamicElement'

import tutorial from './maps/tutorial'

export class Game {

  mapName = "tutorial"

  /**
   * 
   * @param {HTMLElement} el game base element
   * @param {String} assetsBasePath 
   */
  constructor(el, assetsBasePath) {

    this.el = el
    this.assetsBasePath = assetsBasePath

    // Some shortcuts
    this.HEIGHT = this.el.offsetHeight
    this.WIDTH = this.el.offsetWidth

    // Map p5 functions to our game functions
    let s = (sketch) => {
      // Allow to acces the p5 sketch into our game class
      this.sketch = sketch
      sketch.preload = () => { this.preload() }
      sketch.setup = () => { this.setup() }
      sketch.draw = () => { this.draw() }
      sketch.keyPressed = () => { this.keyPressed() }
      
    }
    
    // Initialize p5
    this.myp5 = new window.p5(s, this.el)

  }

  preload () {
    // Create PokedashGame's classes attribute amongst element found in the map to load in param
    // Example: Create this.protagonist and this.protagonistImg
    console.log("------------ PRELOAD() ------------")
    console.log("this.mapName: " + this.mapName)
    for (let ele in [this.mapName].e){
        let eName = [this.mapName].e[ele].name.toLowerCase()
        console.log("eName: "+eName)

        this[eName] = null//with ele = 0 -> this.protagonist = null
        if(eName == 'road') this[eName+"Img"] = null //Not rendering the road (just the background). Easier to handle
        else this[eName+"Img"] = this.sketch.loadImage(`${this.assetsBasePath}/${eName}Img.png`) // -> this.protagonistImg = loadImg(assets/protagonistImg.png)
    }   
  }

  setup () {
    // Define dimension of the map and of each block
    console.log("------------ SETUP() ------------")
    this.sketch.createCanvas(this.HEIGHT, this.WIDTH)
    this.columns = [this.mapName].pattern.length    
    this.rows = [this.mapName].pattern[0].length
    this.blockHeight = this.sketch.floor(this.HEIGHT/this.rows)
    this.blockWidth = this.sketch.floor(this.WIDTH/this.columns)
    // new Element()
    this.iterateOverMap()
  }

  draw () { 
    this.sketch.background("#5E3F6B");
    for (let y = 0; y < this.columns; y++){
        for (let x = 0; x < this.rows; x++) {
            if(this.mapElement[x][y].constructor.name == 'Road') continue                
            else this.mapElement[x][y].show()
        }
    }
  }

  //Function to iterate through the pattern map to fill the array map
  iterateOverMap(){
    //Instantiate 2d array in mapElement
    for(let i = 0; i < this.rows; i++){
        this.mapElement[i] = new Array(this.columns) 
    }
    console.log("------------ ITERATEOVERMAP() ------------")
    for (let y = 0; y < this.columns; y++){
        for (let x = 0; x < this.rows; x++) {
            // Instantiate objects in the 2D array
            let idElement = [this.mapName].pattern[y][x]
            let element = [this.mapName].e[idElement].name
            let elementImg = element.toLowerCase()+'Img'
            this.mapElement[x][y] = new DynamicElement(this, element, x*this.blockWidth, y*this.blockHeight, this[elementImg])
           
            // Récupère la position du joueur dans le tableau d'objet
            if(this.mapElement[x][y].isProtagonist) {
                this.protagonist = this.mapElement[x][y]
            }

            // Récupère le nombre d'objectifs dans le jeu
            if(this.mapElement[x][y].isObjective){
                this.objectives += 1
            } 
            
            if(this.mapElement[x][y].constructor.name == "Door"){
                this.door = this.mapElement[x][y]
            }
        }
    }      
  }

  keyPressed () {
    console.warn(this.sketch.keyCode)
    if (this.sketch.keyCode === this.sketch.LEFT_ARROW){
      console.warn('leftarrow pressed')
    }
  }

  /**
   * @param {string} command
   * @return {string} command output
   */
  executeGameCommand (command) {
    // Execute the command in your game and return the result
  }

}