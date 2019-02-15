class Element{
    constructor(game, x, y, img){
        this.game = game; // game injected from the game class
        this.x = x;
        this.y = y;
        this.img = img;
        this.posX = this.x / this.game.blockHeight;
        this.posY = this.y / this.game.blockWidth;
    }
    
    // Move a sprite to a distance
    moveSprite(direction, distance){
        if (direction === 'left' || direction === LEFT_ARROW){
            this.x -= this.game.blockWidth * distance;
        }

        if (direction === 'right' || direction === RIGHT_ARROW){
            this.x += this.game.blockWidth * distance;
        }

        if (direction === 'up' || direction === UP_ARROW){
            this.y -= this.game.blockHeight * distance;
        }

        if (direction === 'down' || direction === DOWN_ARROW){
            this.y += this.game.blockHeight * distance;
        }
        redraw();
    }

    show(){
        this.game.sketch.image(this.img, this.x, this.y);
    }

   /* static loadSprite(){
        return loadImage(`assets/${this.constructor.name.toLowerCase()}.jpg`)
    }*/
}

// TO DELETE IF NOT USED : module.exports = Element

class MovableElement extends Element {

    constructor(game, x, y, img){
        super(game, x, y, img);
    }

    moveRight(){
        let temp = this.game.mapElement[this.posX+1][this.posY];
        this.game.mapElement[this.posX+1][this.posY] = this.game.mapElement[this.posX][this.posY];
        this.game.mapElement[this.posX][this.posY] = temp;
        this.posX += 1;
        this.x = this.x + this.game.blockWidth; //For sprite drawing
        console.log(this.game.mapElement[this.posX-1][this.posY] );
        return true
    }

    moveLeft(){
        this.x = this.x - this.game.blockWidth; //For sprite drawing
        let temp = this.game.mapElement[this.posX-1][this.posY];
        this.game.mapElement[this.posX-1][this.posY] = this.game.mapElement[this.posX][this.posY];
        this.game.mapElement[this.posX][this.posY] = temp;
        this.posX -=1;
        return true
    }
    
    moveDown(){
        this.y = this.y + this.game.blockHeight; //For sprite drawing
        let temp = this.game.mapElement[this.posX][this.posY+1];
        this.game.mapElement[this.posX][this.posY+1] = this.game.mapElement[this.posX][this.posY];
        this.game.mapElement[this.posX][this.posY] = temp;
        this.posY += 1;
        return true
    }

    moveUp(){
        this.y = this.y - this.game.blockHeight; //For sprite drawing
        let temp = this.game.mapElement[this.posX][this.posY-1];
        this.game.mapElement[this.posX][this.posY-1] = this.game.mapElement[this.posX][this.posY];
        this.game.mapElement[this.posX][this.posY] = temp;
        this.posY -=1;
        return true     
    }

    /*testMove(comingFrom){
        //Testing limit of the screen
        if(x < 0 || y < 0) return false
        if(x > this.game.WIDTH || y > this.game.HEIGHT) return false

        if(isStatic) return false
        if(isMovable) e.action(comingFrom)
    }*/

    // Function so the player can swap between two sprites

    // !!!!!! TO DO / TO TEST : maybe need to change also the x and y so the sprite can move !!!!
    swapSprite(direction, distanceFrom, distanceTo){
        let x = this.game.protagonist.posX;
        let y = this.game.protagonist.posY;        
        
        if (direction === 'right' || direction === RIGHT_ARROW){
            let temp = this.game.mapElement[x + distanceFrom][y];
            console.log(this.game.mapElement[x + distanceTo][y]);
           // this.this.game.mapElement[x + distanceFrom][y].x = 
            this.game.mapElement[x + distanceFrom][y] = this.game.mapElement[x + distanceTo][y];
            this.game.mapElement[x + distanceFrom][y] = temp;   
        }
        if (direction === 'left' || direction === LEFT_ARROW){
            let temp = this.game.mapElement[x - distanceFrom][y];
            this.game.mapElement[x - distanceFrom][y] = this.game.mapElement[x - distanceTo][y];
            this.game.mapElement[x - distanceFrom][y] = temp;
        } 
        if (direction === 'down' || direction === DOWN_ARROW){
            let temp = this.game.mapElement[x][y + distanceFrom];
            this.game.mapElement[x][y + distanceFrom] = this.game.mapElement[x][y + distanceTo];
            this.game.mapElement[x][y + distanceFrom] = temp;
        }
        if (direction === 'up' || direction === UP_ARROW){
            let temp = this.game.mapElement[x][y - distanceFrom];
            this.game.mapElement[x][y - distanceFrom] = this.game.mapElement[x][y - distanceTo];
            this.game.mapElement[x][y - distanceFrom] = temp;
        }
        console.log("x: " + this.game.protagonist.posX, "y: " +this.game.protagonist.posY);
    }
}

class Boulder extends MovableElement{
    constructor(game, x, y, img){
        super(game, x, y, img);
    }

    action(information){
        console.log("bienvenue dans la méthode action de la classe Boulder");
        console.log("Information: " + information);
        return true
    }

}

// TO DELETE IF NOT USED : module.exports = Boulder

class StaticElement extends Element {

    constructor(game, x, y, img){
        super(game, x, y, img);
    }
}

// TO DELETE IF NOT USED : module.exports = StaticElement

class Door extends StaticElement{
    constructor(game, x, y, img){
        super(game, x, y, img);
        this.isOpen = false;
    }

    action(information){
        console.log("bienvenue dans la méthode action de la classe Door");
        return true
    }

    open(){
        this.isOpen = true;
        this.img = this.game.sketch.loadImage(`${this.game.assetsBasePath}/openDoorImg.png`);
        this.game.sketch.redraw();
    }

    close(){
        this.isOpen = false;
        this.img = this.game.sketch.loadImage(`${this.game.assetsBasePath}/doorImg.png`);
        this.game.sketch.redraw();
    }
}

// TO DELETE IF NOT USED : module.exports = Door

class Protagonist extends MovableElement {
    constructor(game, x, y, img){
        super(game, x, y, img);
        this.isProtagonist = true;
        this.pokeball = 0;
    }
    
    //static LIFE = 3 
    /*moveLeft(){
        console.log("Protagonist move left")
        console.log(game.blockWidth);
        this.x = this.x - game.blockWidth;
        return true;
    }*/

    action(information){
        console.log("bienvenue dans la méthode action de la classe Protagonist");
        return true
    }
}

class Pokeball extends MovableElement{
    constructor(game, x, y, img){
        super(game, x, y, img);
        this.isObjective = true;
    }

    action(information){
        console.log("bienvenue dans la méthode action de la classe Pokeball");
        // let game = PokedashGame
        /*game.mapElement[this.posX][this.posY] = game.mapElement[game.playerPosX][game.playerPosY]
        game.mapElement[game.playerPosX][game.playerPosY] = new DynamicElement(Road, game.playerPosX*game.blockHeight, game.playerPosY*game.blockWidth, game.roadImg)
        Protagonist.pokeball += 1
        game.playerPosX = this.posX
        game.playerPosY = this.posY*/
        return true
    }
}

// TO DELETE IF NOT USED : module.exports = Pokeball

class Road extends MovableElement{

    constructor(game, x, y, img){
        super(game, x, y, img);
    }

    action(information){
        let temp = game.mapElement[this.posX][this.posY];
        let tempX = this.posX;
        let tempY = this.posY;
        console.log(game.mapElement[this.posX][this.posY]);
        game.mapElement[this.posX][this.posY] = game.mapElement[game.playerPosX][game.playerPosY];
        game.mapElement[game.playerPosX][game.playerPosY].moveSprite(information);
        game.mapElement[game.playerPosX][game.playerPosY] = temp;
        this.posX = game.playerPosX;
        this.posY = game.playerPosY;
        game.playerPosX = tempX;
        game.playerPosY = tempY;
        
       

    }
}

// TO DELETE IF NOT USED : module.exports = Road

class Tree extends StaticElement{

    constructor(game, x, y, img){
        super(game, x, y, img);
    }

    action(information){
        console.log("bienvenue dans la méthode action de la classe Tree");
        return true
    }
}

// TO DELETE IF NOT USED : module.exports = Tree

const classes = {
    Boulder,
    Door,
    Protagonist,
    Pokeball,
    Road,
    Tree
};

class DynamicElement{
    constructor (game, className, x, y, img){
        return new classes[className](game, x, y, img)
    }
}

var tutorial = {
    
    /* 
        0 = PlayableCharacter
        1 = pokeball (objectif)
        2 = door
        3 = opendoor
        4 = boulder
        5 = tree
        9 = road (case vide)
    */
   
    pattern: [
        [5,9,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,1,9,2,9,4,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,0,9,5,9,9,5],
        [5,9,9,9,9,9,9,9,9,9,9,9,9,9,9,5],
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
    ],

    e: {
        0: Protagonist, //There can be only one protagonist in the pattern
        1: Pokeball,
        2: Door, //There can be only one Door actually
        4: Boulder,
        5: Tree,
        9: Road
    }
};

class Game {

  /**
   * 
   * @param {HTMLElement} el game base element
   * @param {String} assetsBasePath 
   */
  constructor(el, assetsBasePath) {

    this.el = el;
    this.assetsBasePath = assetsBasePath;

    // Some shortcuts
    this.HEIGHT = this.el.offsetHeight;
    this.WIDTH = this.el.offsetWidth;

    this.mapElement = [];

    // Map p5 functions to our game functions
    let s = (sketch) => {
      // Allow to acces the p5 sketch into our game class
      this.sketch = sketch;
      sketch.preload = () => { this.preload(); };
      sketch.setup = () => { this.setup(); };
      sketch.draw = () => { this.draw(); };
      sketch.keyPressed = () => { this.keyPressed(); };
      
    };
    
    // Initialize p5
    this.myp5 = new window.p5(s, this.el);

  }

  preload () {
    // Create PokedashGame's classes attribute amongst element found in the map to load in param
    // Example: Create this.protagonist and this.protagonistImg
    console.log("------------ PRELOAD() ------------");
    console.log("this.mapName: " + this.mapName);
    console.log(tutorial);
    for (let ele in tutorial.e){
        let eName = tutorial.e[ele].name.toLowerCase();
        console.log("eName: "+eName);

        this[eName] = null;//with ele = 0 -> this.protagonist = null
        if(eName == 'road') this[eName+"Img"] = null; //Not rendering the road (just the background). Easier to handle
        else this[eName+"Img"] = this.sketch.loadImage(`${this.assetsBasePath}/${eName}Img.png`); // -> this.protagonistImg = loadImg(assets/protagonistImg.png)
    }   
  }

  setup () {
    // Define dimension of the map and of each block
    console.log("------------ SETUP() ------------");
    this.sketch.createCanvas(this.HEIGHT, this.WIDTH);
    this.columns = tutorial.pattern.length;    
    this.rows = tutorial.pattern[0].length;
    this.blockHeight = this.sketch.floor(this.HEIGHT/this.rows);
    this.blockWidth = this.sketch.floor(this.WIDTH/this.columns);
    // new Element()
    this.iterateOverMap();
  }

  draw () { 
    this.sketch.background("#5E3F6B");
    for (let y = 0; y < this.columns; y++){
        for (let x = 0; x < this.rows; x++) {
            if(this.mapElement[x][y].constructor.name == 'Road') continue                
            else this.mapElement[x][y].show();
        }
    }
  }

  //Function to iterate through the pattern map to fill the array map
  iterateOverMap(){
    //Instantiate 2d array in mapElement
    for(let i = 0; i < this.rows; i++){
        this.mapElement[i] = new Array(this.columns); 
    }
    console.log("------------ ITERATEOVERMAP() ------------");
    for (let y = 0; y < this.columns; y++){
        for (let x = 0; x < this.rows; x++) {
            // Instantiate objects in the 2D array
            let idElement = tutorial.pattern[y][x];
            let element = tutorial.e[idElement].name;
            let elementImg = element.toLowerCase()+'Img';
            this.mapElement[x][y] = new DynamicElement(this, element, x*this.blockWidth, y*this.blockHeight, this[elementImg]);
           
            // Récupère la position du joueur dans le tableau d'objet
            if(this.mapElement[x][y].isProtagonist) {
                this.protagonist = this.mapElement[x][y];
            }

            // Récupère le nombre d'objectifs dans le jeu
            if(this.mapElement[x][y].isObjective){
                this.objectives += 1;
            } 
            
            if(this.mapElement[x][y].constructor.name == "Door"){
                this.door = this.mapElement[x][y];
            }
        }
    }      
  }

  // Get element from protagonist
  getElement(direction, distance, optionnal){
    if (distance < 0) return false
    
    let x = this.protagonist.posX;
    let y = this.protagonist.posY;
    let element;
    
    if (direction === 'left' || direction === this.sketch.LEFT_ARROW){
        if (x < 0 ) return false // If it's out of the map
        element = this.mapElement[x - distance][y];
    }

    else if (direction === 'right' || direction === this.sketch.RIGHT_ARROW){
        if (x >= this.blockWidth + distance) return false // If it's out of the map
        element = this.mapElement[x + distance][y];
    }

    else if (direction === 'up' || direction === this.sketch.UP_ARROW){
        if (y < 0 ) return false // If it's out of the map
        element = this.mapElement[x][y - distance];
    }

    else if (direction === 'down' || direction === this.sketch.DOWN_ARROW){
        if (y >= this.blockHeight + distance) return false // If it's out of the map
        element = this.mapElement[x][y + distance];
    }
    else return null

    if(optionnal == 'admin') return element

    return element.constructor.name.toString() // Return the name of the class's element in string
  }

  refreshPos(){
      for (let y = 0; y < this.columns; y++){
          for (let x = 0; x < this.rows; x++) {
              // Refresh pos X and Y
              this.mapElement[x][y].x = x * this.blockWidth;
              this.mapElement[x][y].y = y * this.blockHeight;
          }
      }
  }

  keyPressed() {
      //let element = null
      let element = this.getElement(this.sketch.keyCode, 1);
      console.log('element: ' + element);
      if(element == 'road') return false
      if (this.sketch.keyCode === this.sketch.LEFT_ARROW){
          // Check if not going out of the map
          if(this.protagonist.posX <= 0) return false 
          //element = this.getElement(this.sketch.keyCode, 1)
          this.protagonist.moveLeft();           
  
      } else if(this.sketch.keyCode === this.sketch.RIGHT_ARROW) {
          // Check if not going out of the map
          if(this.protagonist.posX >= this.rows - 1) return false 
          console.log(this.protagonist.posX);
          console.log(this.rows - 1);
          //element = this.getElement(this.sketch.keyCode, 1)
          this.protagonist.moveRight();
         // this.protagonist.swapSprite(this.sketch.keyCode, 0, 1)

      } else if(this.sketch.keyCode === this.sketch.UP_ARROW) {
          // Check if not going out of the map
          if(this.protagonist.posY <= 0) return false 
          //element = this.getElement(this.sketch.keyCode, 1)
          this.protagonist.moveUp();

      } else if(this.sketch.keyCode === this.sketch.DOWN_ARROW) {
          // Check if not going out of the map
          if(this.protagonist.posY >= this.columns-1) return false
         // element = this.getElement(this.sketch.keyCode, 1)
          this.protagonist.moveDown();

      }
      else{
          return false
      }
      //element.action(keyCode)
      //this.protagonist.swapSprite(keyCode, 0, 1)
      this.refreshPos();
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

export { Game };
