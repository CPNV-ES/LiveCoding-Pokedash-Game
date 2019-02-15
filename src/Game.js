import { DynamicElement } from './DynamicElement'

import tutorial from './maps/tutorial'

export class Game {

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

    this.mapElement = []

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
    console.log(tutorial)
    for (let ele in tutorial.e){
        let eName = tutorial.e[ele].name.toLowerCase()
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
    this.columns = tutorial.pattern.length    
    this.rows = tutorial.pattern[0].length
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
            let idElement = tutorial.pattern[y][x]
            let element = tutorial.e[idElement].name
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

  // Get element from protagonist
  getElement(direction, distance, optionnal){
    if (distance < 0) return false
    
    let x = this.protagonist.posX
    let y = this.protagonist.posY
    let element
    
    if (direction === 'left' || direction === this.sketch.LEFT_ARROW){
        if (x < 0 ) return false // If it's out of the map
        element = this.mapElement[x - distance][y]
    }

    else if (direction === 'right' || direction === this.sketch.RIGHT_ARROW){
        if (x >= this.blockWidth + distance) return false // If it's out of the map
        element = this.mapElement[x + distance][y]
    }

    else if (direction === 'up' || direction === this.sketch.UP_ARROW){
        if (y < 0 ) return false // If it's out of the map
        element = this.mapElement[x][y - distance]
    }

    else if (direction === 'down' || direction === this.sketch.DOWN_ARROW){
        if (y >= this.blockHeight + distance) return false // If it's out of the map
        element = this.mapElement[x][y + distance]
    }
    else return null

    if(optionnal == 'admin') return element

    return element.constructor.name.toString() // Return the name of the class's element in string
  }

  refreshPos(){
      for (let y = 0; y < this.columns; y++){
          for (let x = 0; x < this.rows; x++) {
              // Refresh pos X and Y
              this.mapElement[x][y].x = x * this.blockWidth
              this.mapElement[x][y].y = y * this.blockHeight
          }
      }
  }

  keyPressed() {
      //let element = null
      let element = this.getElement(this.sketch.keyCode, 1)
      console.log('element: ' + element)
      if(element == 'road') return false
      if (this.sketch.keyCode === this.sketch.LEFT_ARROW){
          // Check if not going out of the map
          if(this.protagonist.posX <= 0) return false 
          //element = this.getElement(this.sketch.keyCode, 1)
          this.protagonist.moveLeft()           
  
      } else if(this.sketch.keyCode === this.sketch.RIGHT_ARROW) {
          // Check if not going out of the map
          if(this.protagonist.posX >= this.rows - 1) return false 
          console.log(this.protagonist.posX)
          console.log(this.rows - 1)
          //element = this.getElement(this.sketch.keyCode, 1)
          this.protagonist.moveRight()
         // this.protagonist.swapSprite(this.sketch.keyCode, 0, 1)

      } else if(this.sketch.keyCode === this.sketch.UP_ARROW) {
          // Check if not going out of the map
          if(this.protagonist.posY <= 0) return false 
          //element = this.getElement(this.sketch.keyCode, 1)
          this.protagonist.moveUp()

      } else if(this.sketch.keyCode === this.sketch.DOWN_ARROW) {
          // Check if not going out of the map
          if(this.protagonist.posY >= this.columns-1) return false
         // element = this.getElement(this.sketch.keyCode, 1)
          this.protagonist.moveDown()

      }
      else{
          return false
      }
      //element.action(keyCode)
      //this.protagonist.swapSprite(keyCode, 0, 1)
      this.refreshPos()
      return true
  }

  /**
   * @param {string} command
   * @return {string} command output
   */
  executeGameCommand (command) {
    // Execute the command in your game and return the result
  }

}