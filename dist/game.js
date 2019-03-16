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
        this.game.sketch.image(this.img, this.x, this.y, this.game.blockHeight, this.game.blockWidth);
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
    /*swapSprite(direction, distanceFrom, distanceTo){
        let x = this.game.protagonist.posX
        let y = this.game.protagonist.posY        
        
        if (direction === 'right' || direction === RIGHT_ARROW){
            let temp = this.game.mapElement[x + distanceFrom][y]
            console.log(this.game.mapElement[x + distanceTo][y])
           // this.this.game.mapElement[x + distanceFrom][y].x = 
            this.game.mapElement[x + distanceFrom][y] = this.game.mapElement[x + distanceTo][y]
            this.game.mapElement[x + distanceFrom][y] = temp   
        }
        if (direction === 'left' || direction === LEFT_ARROW){
            let temp = this.game.mapElement[x - distanceFrom][y]
            this.game.mapElement[x - distanceFrom][y] = this.game.mapElement[x - distanceTo][y]
            this.game.mapElement[x - distanceFrom][y] = temp
        } 
        if (direction === 'down' || direction === DOWN_ARROW){
            let temp = this.game.mapElement[x][y + distanceFrom]
            this.game.mapElement[x][y + distanceFrom] = this.game.mapElement[x][y + distanceTo]
            this.game.mapElement[x][y + distanceFrom] = temp
        }
        if (direction === 'up' || direction === UP_ARROW){
            let temp = this.game.mapElement[x][y - distanceFrom]
            this.game.mapElement[x][y - distanceFrom] = this.game.mapElement[x][y - distanceTo]
            this.game.mapElement[x][y - distanceFrom] = temp
        }
        console.log("x: " + this.game.protagonist.posX, "y: " +this.game.protagonist.posY)
    }*/
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
        this.img = this.game.sketch.loadImage(`${this.game.assetsBasePath}/${this.game.mapName.template}/openDoorImg.png`);
        this.game.sketch.redraw();
    }

    close(){
        this.isOpen = false;
        this.img = this.game.sketch.loadImage(`${this.game.assetsBasePath}/${this.game.mapName.template}/doorImg.png`);
        this.game.sketch.redraw();
    }
}

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

    remove(){
        //this = new Road()
        //this.img = this.game.sketch.loadImage(`${this.game.assetsBasePath}/roadImg.png`)
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
        3 = boulder
        4 = tree
        9 = road (case vide)
    */

    template: 'pokemon',
   
    pattern: [
        [4,4,9,4,4,4,4,4,4,4,4,4,4,4,4,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,1,9,2,9,3,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,1,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,0,9,4,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,4,4,4,4,4,4,4,4,9,4,4,4,4,4,4]
    ],

    e: {
        0: Protagonist, //There can be only one protagonist in the pattern
        1: Pokeball,
        2: Door, //There can be only one Door actually
        3: Boulder,
        4: Tree,
        9: Road
    }
};

var level1 = {
    
    /* 
        0 = PlayableCharacter
        1 = pokeball (objectif)
        2 = door
        3 = boulder
        4 = tree
        9 = road (case vide)
    */
    template: 'zelda',
   
    pattern: [
        [0,3,9,9,9,9,9,9,9,4,4,1,1,4,1,4],
        [9,3,9,9,4,4,4,4,9,4,4,1,1,4,9,4],
        [4,9,4,4,9,9,9,4,9,9,3,9,4,1,9,1],
        [1,3,9,3,9,9,9,1,4,9,4,9,4,1,3,1],
        [4,9,4,4,4,4,4,9,4,9,4,9,9,4,9,4],
        [1,9,9,9,3,9,9,9,3,9,4,9,9,9,9,4],
        [4,4,9,9,9,4,9,4,4,9,4,4,4,9,9,4],
        [4,9,4,9,4,9,9,4,9,9,9,9,4,9,9,9],
        [9,9,4,4,9,9,4,4,1,3,1,9,4,4,3,9],
        [9,4,4,4,9,4,4,4,3,2,3,9,4,9,9,9],
        [9,9,4,4,9,3,9,4,1,3,1,9,4,9,9,9],
        [4,9,9,9,9,9,9,4,9,9,9,9,9,9,9,9],
        [9,9,4,4,4,4,4,4,4,4,4,4,9,4,4,4],
        [9,4,4,9,9,9,9,4,9,3,3,9,3,3,9,9],
        [9,9,4,9,4,9,1,3,1,9,9,3,9,3,9,9],
        [4,9,9,9,4,9,9,4,9,9,9,3,9,9,9,9]
    ],

    e: {
        0: Protagonist, //There can be only one protagonist in the pattern
        1: Pokeball,
        2: Door, //There can be only one Door actually
        3: Boulder,
        4: Tree,
        9: Road
    }
};

var level2 = {
    
    /* 
        0 = PlayableCharacter
        1 = pokeball (objectif)
        2 = door
        3 = boulder
        4 = tree
        9 = road (case vide)
    */
    template: 'pokemon',
   
    pattern: [
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,2,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,0,1,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
    ],

    e: {
        0: Protagonist, //There can be only one protagonist in the pattern
        1: Pokeball,
        2: Door, //There can be only one Door actually
        3: Boulder,
        4: Tree,
        9: Road
    }
};

var level3 = {
    
    /* 
        0 = PlayableCharacter
        1 = pokeball (objectif)
        2 = door
        3 = boulder
        4 = tree
        9 = road (case vide)
    */
    
    template: 'pokemon',

    pattern: [
        [9,9,9,9,9,4,4,4,4,4,4,4,4,4,4,4],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,1,9,2,9,3,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,1,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,0,9,4,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,4,4,4,4,4,4,4,4,9,4,4,4,4,4,4]
    ],

    e: {
        0: Protagonist, //There can be only one protagonist in the pattern
        1: Pokeball,
        2: Door, //There can be only one Door actually
        3: Boulder,
        4: Tree,
        9: Road
    }
};

class CustomError extends Error{
    constructor (message){
        super(message);

        this.constructor = CustomError;
        this.__proto__ = CustomError.prototype;
        this.message = message;
    }
}

class ElementOutOfMapError extends CustomError{
    constructor(message){
        super(message);
        this.message = "Can't get element out of map";
    }
}

class PushOutOfMapError extends CustomError{
    constructor(message){
        super(message);
        this.message = "Can't push an element out of map";
    }
}

class Game {

    /**
     *
     * @param {HTMLElement} el game base element
     * @param {String} assetsBasePath
     */
    constructor(el, assetsBasePath) {

        this.el = el;
        this.assetsBasePath = assetsBasePath;
    
        // Get height and width (shortcuts)
        this.HEIGHT = this.el.offsetHeight;
        this.WIDTH = this.el.offsetWidth;
        
        this.DEFAULTBG = '#77ff33';

        // Game Logic
        this.objectives = 0;
        this.level = 0;
        this.mapElement = [];
        this.mapName = tutorial;

        // Sound Logic and library
        this.musicBasePath = 'music';
        this.sounds = [
            `${this.assetsBasePath}/${this.musicBasePath}/bonta.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/pokemon.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/incarnam.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/lostWoods.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/lullaby.mp3`,
            `${this.assetsBasePath}${this.musicBasePath}/nemo.mp3`
        ];
        this.idx = 0; // Index to select a music file
        this.musicLoaded = [];
        this.musicPlaying = false;
        this.volume = 1;

        // Map p5 functions to our game functions
        let s = (sketch) => {
            // Allow to acces the p5 sketch into our game class
            this.sketch = sketch;
            sketch.preload = () => { this.preload(); };
            sketch.setup = () => { this.setup(); };
            sketch.draw = () => { this.draw(); };
            sketch.keyPressed = () => { this.keyPressed(); };
            sketch.keyTyped = () => { this.keyTyped(); };
        };

        // Initialize p5
        this.myp5 = new window.p5(s, this.el);


    }

    preload(mapName) {
        if (mapName) this.mapName = mapName;
        else this.mapName = tutorial;
        // Create PokedashGame's classes attribute amongst element found in the map to load in param
        // Example: Create this.protagonist and this.protagonistImg
        console.log("------------ PRELOAD() ------------");
        console.log(this.mapName);
        for (let ele in this.mapName.e) {
            let eName = this.mapName.e[ele].name.toLowerCase();
            this[eName] = null;
            // We don't display road image
            if (eName == 'road') {
                this[eName + "Img"] = null;
                continue
            }
            // Create new image attribute
            this[eName + "Img"] = this.sketch.loadImage(`${this.assetsBasePath}/${this.mapName.template}/${eName}Img.png`); // -> this.protagonistImg = loadImg(assets/protagonistImg.png)
        }

        // Load Music
        this.sketch.shuffle(this.sounds, true);
        for (let s of this.sounds) {
            console.log(s);
            this.musicLoaded.push(this.sketch.loadSound(s));
        }
        console.log(this.musicLoaded);
    }

    setup() {
        if (this.mapName == undefined) this.mapName = tutorial;
        // Define dimension of the map and of each block
        console.log("------------ SETUP() ------------");
        this.sketch.createCanvas(this.HEIGHT, this.WIDTH);
        this.columns = this.mapName.pattern.length;
        this.rows = this.mapName.pattern[0].length;
        this.blockHeight = this.sketch.floor(this.HEIGHT / this.rows);
        this.blockWidth = this.sketch.floor(this.WIDTH / this.columns);

        // Load background
       // this.background = this.sketch.loadImage(`${this.assetsBasePath}/${this.mapName.template}/background.png`)
        // new Element()
        this.iterateOverMap();

    }

    draw() {
        this.sketch.background(this.background);  
        for (let y = 0; y < this.columns; y++) {
            for (let x = 0; x < this.rows; x++) {
                if (this.mapElement[x][y].constructor.name == 'Road') continue
                else this.mapElement[x][y].show();
            }
        }
    }

    //Function to iterate through the pattern map to fill the array map
    iterateOverMap() {
        if (this.mapName == undefined) this.mapName = tutorial;
        //Instantiate 2d array in mapElement
        for (let i = 0; i < this.rows; i++) {
            this.mapElement[i] = new Array(this.columns);
        }
        console.log("------------ ITERATEOVERMAP() ------------");
        for (let y = 0; y < this.columns; y++) {
            for (let x = 0; x < this.rows; x++) {
                // Instantiate objects in the 2D array
                let idElement = this.mapName.pattern[y][x];
                let element = this.mapName.e[idElement].name;
                let elementImg = element.toLowerCase() + 'Img';
                this.mapElement[x][y] = new DynamicElement(this, element, x * this.blockWidth, y * this.blockHeight, this[elementImg]);

                // Récupère la position du joueur dans le tableau d'objet
                if (this.mapElement[x][y].isProtagonist) {
                    this.protagonist = this.mapElement[x][y];
                }

                // Récupère le nombre d'objectifs dans le jeu
                if (this.mapElement[x][y].isObjective) {
                    this.objectives += 1;
                }

                if (this.mapElement[x][y].constructor.name == "Door") {
                    this.door = this.mapElement[x][y];
                }
            }
        }
    }

    // Functions for user
    getObjectives() {
        return this.objectives.toString()
    }

    takeObjective() {
        this.objectives -= 1;
        this.mapElement[this.pokeball.posX][this.pokeball.posY] = new Road(this, this.pokeball.x, this.pokeball.y, 'roadImg');
        //this.mapElement[this.pokeball.posX][this.pokeball.posY].remove()
        return true
    }

    isDoorOpen() {
        return this.mapElement[this.door.posX][this.door.posY].isOpen
    }

    openDoor() {
        if (this.objectives != 0) throw "You can't open door while there is still existing objective"
        this.mapElement[this.door.posX][this.door.posY].open();
        return true
    }

    closeDoor() {
        this.mapElement[this.doorPosX][this.doorPosY].close();
        return true
    }

    nextLevel() {
        if (!this.isDoorOpen()) throw "LA PORTE EST FERMEE"
        console.log("* * * * YOU WIN * * * *");
        this.level += 1;
        switch (this.level) {
            case 1:
                this.mapName = level1;
                this.background = '#619b1f'; // Green
                this.loadMusic('lostWoossds.mp3');
                break

            case 2:
                this.mapName = level2;
                this.backgorund = "#3a7eea"; // Blue
                this.loadMusic('nemo.mp3');
                break

            case 3:
                this.mapName = level3;
                this.background = this.DEFAULTBG;
                break

            default:
                this.mapName = tutorial;
                break
        }
        this.preload(this.mapName);
        this.setup();
        return true
    }

    getMusic(){
        return this.musicLoaded[this.index].url
    }

    // Function to load a music by his name. Need to put full name of music ('music1.mp3')
    loadMusic(musicName){
        for (const [index] of this.musicLoaded.entries()){
            // If we find the music
            if(this.musicLoaded[index].url == `${this.assetsBasePath}/${this.musicBasePath}/${musicName}`){
                this.musicLoaded[this.idx].stop();
                this.idx = index;
                this.musicLoaded[this.idx].loop();
            }
        }
    }

    // Get element from protagonist
    getElement(direction, distance, optionnal) {
        if (distance < 0) return false
        this.loadMusic('bonta');
        let x = this.protagonist.posX;
        let y = this.protagonist.posY;
        let element = null;
        if (direction === 'left' || direction === this.sketch.LEFT_ARROW) {
            if (x < 0 + distance) throw new ElementOutOfMapError // If it's out of the map
            element = this.mapElement[x - distance][y];
            if (element.isObjective) this.pokeball = element;
        }

        else if (direction === 'right' || direction === this.sketch.RIGHT_ARROW) {
            if (x >= this.columns - distance) throw new ElementOutOfMapError // If it's out of the map
            element = this.mapElement[x + distance][y];
            if (element.isObjective) this.pokeball = element;
        }

        else if (direction === 'up' || direction === this.sketch.UP_ARROW) {
            if (y < 0 + distance) throw new ElementOutOfMapError // If it's out of the map
            element = this.mapElement[x][y - distance];
            if (element.isObjective) this.pokeball = element;
        }

        else if (direction === 'down' || direction === this.sketch.DOWN_ARROW) {
            if (y >= this.rows - distance) throw new ElementOutOfMapError // If it's out of the map
            element = this.mapElement[x][y + distance];
            if (element.isObjective) this.pokeball = element;
        }
        else return null


        if (optionnal == 'admin') return element

        return element.constructor.name.toString() // Return the name of the class's element in string
    }

    swapSprite(direction, distanceFrom, distanceTo) {
        if (distanceFrom > distanceTo) {
            throw "Parameter 'distanceTo' has to be >= than 'distanceFrom'"
        }
        let x = this.protagonist.posX;
        let y = this.protagonist.posY;
        let s = this.sketch;

        if (direction === 'right' || direction === s.RIGHT_ARROW) {
            if (x + distanceFrom > this.columns - distanceTo) throw new PushOutOfMapError
            let temp = this.mapElement[x + distanceFrom][y];
            this.mapElement[x + distanceFrom][y] = this.mapElement[x + distanceTo][y];
            this.mapElement[x + distanceTo][y] = temp;
        }
        if (direction === 'left' || direction === s.LEFT_ARROW) {
            if (x - distanceFrom <= 0) throw new PushOutOfMapError
            let temp = this.mapElement[x - distanceFrom][y];
            this.mapElement[x - distanceFrom][y] = this.mapElement[x - distanceTo][y];
            this.mapElement[x - distanceTo][y] = temp;
        }
        if (direction === 'down' || direction === s.DOWN_ARROW) {
            if (y + distanceFrom > this.rows - distanceTo) throw new PushOutOfMapError
            let temp = this.mapElement[x][y + distanceFrom];
            this.mapElement[x][y + distanceFrom] = this.mapElement[x][y + distanceTo];
            this.mapElement[x][y + distanceTo] = temp;
        }
        if (direction === 'up' || direction === s.UP_ARROW) {
            if (y - distanceFrom <= 0) throw new PushOutOfMapError
            let temp = this.mapElement[x][y - distanceFrom];
            this.mapElement[x][y - distanceFrom] = this.mapElement[x][y - distanceTo];
            this.mapElement[x][y - distanceTo] = temp;
        }
        this.refreshPos();
        return true
    }

    // To handle shift + key
    keyTyped() {
        switch (this.sketch.key) {
            // Play ON/OFF the music
            case 'M':
                if (this.musicPlaying) {
                    this.musicLoaded[this.idx].pause();
                    console.log("Music paused");
                    this.musicPlaying = false;
                }
                else {
                    this.musicLoaded[this.idx].loop(0, 1, this.volume);
                    console.log("Music started");
                    this.musicPlaying = true;
                }
                break

            // Play Next song 
            case 'N':
                this.musicLoaded[this.idx].stop();
                this.idx += 1;
                if (this.idx >= this.musicLoaded.length) this.idx = 0;
                this.musicLoaded[this.idx].loop(0, 1, this.volume);
                this.musicPlaying = true;
                break

            // Play Last song 
            case 'B':
                this.musicLoaded[this.idx].stop();
                this.idx = this.idx - 1;
                if (this.idx <= 0) this.idx = this.musicLoaded.length - 1;
                this.musicLoaded[this.idx].loop(0, 1, this.volume);
                this.musicPlaying = true;
                break

            // Increase the volume
            case '+':
                if(this.volume+0.05 >= 1) this.volume = 1;
                else this.volume += 0.05;
                this.musicLoaded[this.idx].setVolume(this.volume);
                break

            // Lower the volume
            case '-':
                if(this.volume-0.05 <=0) this.volume = 0;
                else this.volume -= 0.05;
                this.musicLoaded[this.idx].setVolume(this.volume);
                break
        }
    }

    keyPressed() {
        let s = this.sketch;
        if (s.keyCode === s.LEFT_ARROW || s.keyCode === s.RIGHT_ARROW || s.keyCode === s.UP_ARROW || s.keyCode === s.DOWN_ARROW) {

            let element = this.getElement(s.keyCode, 1);
            console.log("element: ", element);
            switch (element) {
                case "Road":
                    this.swapSprite(s.keyCode, 0, 1);
                    break

                case "Boulder":
                    if (this.getElement(s.keyCode, 2) != "Road") break
                    this.swapSprite(s.keyCode, 1, 2);
                    this.swapSprite(s.keyCode, 0, 1);
                    break

                case "Pokeball":
                    this.takeObjective();
                    this.swapSprite(s.keyCode, 0, 1);
                    if (this.getObjectives() == 0) {
                        this.openDoor();
                    }
                    break

                case "Door":
                    if (this.isDoorOpen()) this.nextLevel();
                    break
            }
        }
        // Restart game if we press 'r'
        if (s.keyCode == 82) {
            this.objectives = 0;
            this.setup(this.mapName);
        }

        return true
    }

    playNext() {
        if (this.idx == 4) this.idx = 0;
        console.log("Next music incoming");
        this.idx += 1;
        this.musicLoaded[this.idx].play();
    }

    refreshPos() {
        for (let y = 0; y < this.columns; y++) {
            for (let x = 0; x < this.rows; x++) {
                // Refresh pos X and Y
                this.mapElement[x][y].x = x * this.blockWidth;
                this.mapElement[x][y].posX = x;
                this.mapElement[x][y].y = y * this.blockHeight;
                this.mapElement[x][y].posY = y;
            }
        }
    }

    waitUntilKeyPressed() {
        console.log('Wait the user pres an arrow key !');
        return new Promise(resolve => {
            document.addEventListener('keyup', resolve, { once: true });
        })
    }


    /**
     * @param {string} command
     * @return {string} command output
     */
    async executeGameCommand(command) {
        // Execute the command in your game and return the result
        command = JSON.parse(command);

        switch (command.action) {
            case 'getElement':
                return this.getElement(command.params[0], command.params[1]) // Return string of the element

            case 'swapSprite':
                console.log('swapSprite case');
                return this.swapSprite(command.params[0], command.params[1], command.params[2]) // Return true

            case 'getObjectives':
                return this.getObjectives() // Return numerical string

            case 'takeObjective':
                return this.takeObjective() // Return true

            case 'isDoorOpen':
                return this.isDoorOpen()    // Return true

            case 'openDoor':
                return this.openDoor()  // Return true

            case 'closeDoor':
                return this.closeDoor() // Return true

            case 'nextLevel':
                return this.nextLevel() // Return true or false
        }
    }
}

export { Game };
