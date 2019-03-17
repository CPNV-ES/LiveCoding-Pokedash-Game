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
}

class MovableElement extends Element {

    constructor(game, x, y, img){
        super(game, x, y, img);
    }
}

class Boulder extends MovableElement{
    constructor(game, x, y, img){
        super(game, x, y, img);
    }
}

class StaticElement extends Element {

    constructor(game, x, y, img){
        super(game, x, y, img);
    }
}

class Door extends StaticElement{
    constructor(game, x, y, img){
        super(game, x, y, img);
        this.isOpen = false;
        this.isDoor = true;
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
        this.objective = 0;
    }
}

class Objective extends MovableElement{
    constructor(game, x, y, img){
        super(game, x, y, img);
        this.isObjective = true;
    }
}

class Road extends MovableElement{

    constructor(game, x, y, img){
        super(game, x, y, img);
    }
}

class Tree extends StaticElement{

    constructor(game, x, y, img){
        super(game, x, y, img);
    }
}

const classes = {
    Boulder,
    Door,
    Protagonist,
    Objective,
    Road,
    Tree
};

class DynamicElement{
    constructor (game, className, x, y, img){
        return new classes[className](game, x, y, img)
    }
}

var tutorial = {
    // TUTORIAL LEVEL (POKEMON)
    /* 
        0 = PlayableCharacter
        1 = objective (objectif)
        2 = door
        3 = boulder
        4 = tree
        9 = road (case vide)
    */
    name: 'pokemonTutorial',
    template: 'pokemon',
    background: '#77ff33',
    music: 'pokemonGeneric.mp3',
   
    pattern: [
        [9,9,9,4,4,4,4,4,4,4,4,4,4,4,4,4],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,3,3,1,3,4,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,1,1,1,3,9,9,9,9,9,3,9,9,9],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [4,9,9,9,9,9,9,2,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,0,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,4],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [4,9,9,9,9,9,9,3,9,9,9,9,1,9,9,4],
        [4,9,4,4,9,9,3,3,3,9,9,1,1,1,9,4],
        [4,9,4,4,9,9,9,3,9,9,9,9,1,9,9,4],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
    ],

    e: {
        0: Protagonist, //There can be only one protagonist in the pattern
        1: Objective,
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

var nemo = {
    // NEMO OR DORI FIRST LEVEL
    /* 
        0 = PlayableCharacter
        1 = objective (objectif)
        2 = door
        3 = boulder
        4 = tree
        9 = road (case vide)
    */
    name: 'nemo',
    template: 'nemo',
    background: '#3a7eea',
    music: 'nemo.mp3',
   
    pattern: [
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
        [4,9,9,4,1,9,9,9,4,9,9,9,9,9,9,4],
        [4,9,9,4,4,9,4,9,4,9,9,9,9,9,3,9],
        [4,9,9,3,9,9,9,9,4,9,3,3,3,3,9,4],
        [4,9,9,9,3,4,4,9,4,9,3,1,9,9,3,9],
        [4,9,9,9,9,4,9,9,4,9,3,1,9,3,9,4],
        [4,4,9,9,9,9,4,2,4,9,3,3,3,3,1,4],
        [4,9,9,9,4,9,9,9,4,0,1,9,9,3,3,4],
        [4,4,4,4,4,9,9,9,9,9,9,9,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,4,4,4,1,4,4,4],
        [4,9,9,9,9,9,9,9,9,4,1,4,9,9,9,4],
        [4,9,9,9,9,9,9,9,9,4,9,4,4,4,9,4],
        [4,3,3,9,9,9,3,9,9,4,9,4,9,3,9,4],
        [4,1,3,9,3,9,9,9,9,4,9,9,3,9,9,4],
        [4,9,1,9,3,9,9,1,3,1,9,9,9,3,9,4],
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
    ],

    e: {
        0: Protagonist, //There can be only one protagonist in the pattern
        1: Objective,
        2: Door, //There can be only one Door actually
        3: Boulder,
        4: Tree,
        9: Road
    }
};

var pokemon1 = {
    // POKEMON LEVEL 2 
    /* 
        0 = PlayableCharacter
        1 = objective (objectif)
        2 = door
        3 = boulder
        4 = tree
        9 = road (case vide)
    */
    name: 'pokemon1',
    template: 'pokemon',
    background: '',
    music: '',

    pattern: [
        [9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,2],
        [1,4,3,4,4,4,4,4,4,4,4,4,4,4,4,4],
        [9,4,9,1,9,1,9,1,9,1,9,1,9,1,9,4],
        [1,4,1,4,3,4,4,4,4,4,4,4,4,4,1,4],
        [9,4,9,4,9,1,9,1,9,1,9,1,9,3,9,4],
        [1,4,1,4,1,4,4,4,4,4,4,4,1,4,1,4],
        [9,4,9,4,9,4,9,1,9,1,9,3,9,4,9,4],
        [1,4,1,4,1,4,1,3,4,4,1,4,1,4,1,4],
        [9,4,9,4,9,3,9,1,0,4,9,4,9,4,9,4],
        [1,4,1,4,1,4,4,4,4,4,1,4,1,4,1,4],
        [9,4,9,4,9,1,9,1,9,1,9,4,9,4,9,4],
        [1,4,1,4,4,4,4,4,4,4,3,4,1,4,1,4],
        [9,3,9,1,9,1,9,1,9,1,9,1,9,4,9,4],
        [1,4,4,4,4,4,4,4,4,4,4,4,3,4,1,4],
        [9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,4],
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
    ],

    e: {
        0: Protagonist, //There can be only one protagonist in the pattern
        1: Objective,
        2: Door, //There can be only one Door actually
        3: Boulder,
        4: Tree,
        9: Road
    }
};

var zeldaGreen = {
    // ZELDA FIRST LEVEL
    /* 
        0 = PlayableCharacter
        1 = objective (objectif)
        2 = door
        3 = boulder
        4 = tree
        9 = road (case vide)
    */
    name: 'zeldaGreen',
    template: 'zelda',
    background: '#619b1f',
    music: 'lostWoods.mp3',
   
    pattern: [
        [0,3,9,9,9,9,1,9,9,4,4,1,1,4,1,4],
        [9,3,9,9,4,4,4,4,9,4,4,1,1,4,9,4],
        [4,9,4,4,9,9,9,4,9,9,3,9,4,1,9,1],
        [1,3,9,3,9,9,9,1,4,3,4,9,4,1,3,1],
        [4,9,4,4,4,4,4,9,4,9,4,9,9,4,9,4],
        [1,9,9,9,3,9,9,9,3,9,4,9,9,9,9,4],
        [4,4,9,9,9,4,9,4,4,1,4,4,4,9,9,4],
        [4,9,4,9,4,9,9,4,9,9,9,9,4,9,9,9],
        [9,9,4,4,9,9,4,4,1,3,1,9,4,4,3,9],
        [9,4,4,4,9,4,4,4,3,2,3,9,4,9,9,9],
        [9,9,4,4,9,3,9,4,1,3,1,9,4,9,9,9],
        [4,9,9,9,9,9,9,4,9,9,9,9,9,9,9,9],
        [9,9,4,4,4,4,4,4,4,4,4,4,9,4,4,4],
        [9,4,4,9,9,9,9,4,1,3,3,9,3,9,3,9],
        [9,9,4,9,4,9,1,3,9,9,9,3,9,3,9,9],
        [4,9,9,9,4,9,9,4,9,9,9,3,9,9,9,9]
    ],

    e: {
        0: Protagonist, //There can be only one protagonist in the pattern
        1: Objective,
        2: Door, //There can be only one Door actually
        3: Boulder,
        4: Tree,
        9: Road
    }
};

var davide = {
    // 
    /* 
        0 = PlayableCharacter
        1 = objective (objectif)
        2 = door
        3 = boulder
        4 = tree
        9 = road (case vide)
    */

    /*
        To check the template disponiblke, go in assets folder or create your own !
    */
    name: 'davide',
    template: 'davide',
    background: '#23c63e',
    music: 'davide.mp3',

    pattern: [
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],
        [9,9,9,9,9,4,4,9,2,9,4,4,9,9,9,9],
        [9,9,9,9,4,4,4,4,9,4,4,4,4,9,9,9],
        [9,9,9,4,4,1,1,4,4,4,1,1,4,4,9,9],
        [9,9,4,4,1,1,1,1,4,1,1,1,1,4,4,9],
        [9,9,4,4,1,1,1,1,1,1,1,1,1,4,4,9],
        [9,9,4,4,1,1,1,1,1,1,1,1,1,4,4,9],
        [9,9,4,4,1,1,1,1,0,1,1,1,1,4,4,9],
        [9,9,9,4,4,1,1,1,1,1,1,1,4,4,9,9],
        [9,9,9,9,4,4,1,1,3,1,1,4,4,9,9,9],
        [9,9,9,9,9,4,4,1,1,1,4,4,9,9,9,9],
        [9,9,9,9,9,9,4,4,1,4,4,9,9,9,9,9],
        [9,9,9,9,9,9,9,4,4,4,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,4,9,9,9,9,9,9,9],
        [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
    ],

    e: {
        0: Protagonist, //There can be only one protagonist in the pattern
        1: Objective,
        2: Door, //There can be only one Door actually
        3: Boulder,
        4: Tree,
        9: Road
    }
};

var testHeavyMap = {
    // 
    /* 
        0 = PlayableCharacter
        1 = objective (objectif)
        2 = door
        3 = boulder
        4 = tree
        9 = road (case vide)
    */

    /*
        To check the template disponiblke, go in assets folder or create your own !
    */
    name: 'testHeavyMap',
    template: 'zeldaRed',
    background: '#dd7a37',
    music: 'zeldaRed.mp3',

    pattern: [
        [4,4,4,4,4,4,4,4,4,1,4,4,4,4,4,4],
        [4,9,3,1,3,1,1,3,1,9,9,9,9,3,9,4],
        [4,9,9,9,4,1,1,3,1,3,9,3,9,3,9,4],
        [4,9,4,9,4,1,9,9,3,9,3,9,3,4,1,4],
        [4,9,4,9,4,3,9,3,9,3,9,9,9,3,9,9],
        [4,1,4,9,4,9,3,9,3,9,1,9,1,3,4,4],
        [4,9,4,1,4,3,9,3,4,4,4,4,4,9,3,4],
        [4,9,4,9,4,9,9,9,3,9,4,4,9,4,9,4],
        [4,9,4,9,4,3,4,3,4,9,4,4,9,2,9,4],
        [4,9,4,9,4,1,3,1,4,1,4,4,4,9,4,4],
        [4,1,4,9,4,1,1,1,4,1,4,9,4,9,4,4],
        [4,9,4,9,4,9,3,9,9,9,4,9,4,9,4,4],
        [4,9,4,9,4,3,9,9,4,9,4,9,4,9,4,4],
        [4,9,4,9,4,4,4,4,4,9,4,4,4,9,4,4],
        [4,0,4,9,9,9,9,9,9,9,9,9,9,9,4,4],
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]
    ],

    e: {
        0: Protagonist, //There can be only one protagonist in the pattern
        1: Objective,
        2: Door, //There can be only one Door actually
        3: Boulder,
        4: Tree,
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

        this.setProduction = false; // Set true when in production

        this.el = el;
        this.assetsBasePath = assetsBasePath;

        // Get height and width (shortcuts)
        this.HEIGHT = this.el.offsetHeight;
        this.WIDTH = this.el.offsetWidth;

        this.DEFAULTBGCOLOR = '#77ff33';

        this.background = this.DEFAULTBGCOLOR;
        this.firstLaunch = true;

        // Game Logic
        // Don't forget to Import the levels
        // Chose also the order of your level here
        this.levels = [
            tutorial,
            pokemon1,
            nemo,
            zeldaGreen,
            testHeavyMap,
            davide
        ];
        this.objectives = 0;
        this.level = 0;
        this.mapElement = [];
        this.mapName = tutorial;



        // Sound Logic and library
        this.musicBasePath = 'music';
        this.sounds = [
            `${this.assetsBasePath}/${this.musicBasePath}/pokemon.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/lostWoods.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/lullaby.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/nemo.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/pokemonGeneric.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/davide.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/bonus.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/zeldaRed.mp3`
        ];
        this.idx = 0; // Index to select a music file
        this.musicLoaded = []; // Array to stock all the loaded and processes by p5 music
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

    //************************************* P5 FUNCTIONS *************************************/
    // Initiation of assets loading and display

    preload(mapName) {
        if (mapName) this.mapName = mapName;
        // Create PokedashGame's classes attribute amongst element found in the map to load in param
        // Example: Create this.protagonist and this.protagonistImg
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
        // Only load music at first launch because it loads all music at once
        if (this.firstLaunch) {
            this.sketch.shuffle(this.sounds, true);
            for (let s of this.sounds) {
                this.musicLoaded.push(this.sketch.loadSound(s));
            }
        }
    }

    setup() {
        if (this.mapName == undefined) this.mapName = tutorial;
        // Define dimension of the map and of each block
        this.sketch.createCanvas(this.HEIGHT, this.WIDTH);
        this.columns = this.mapName.pattern.length;
        this.rows = this.mapName.pattern[0].length;
        this.blockHeight = this.sketch.floor(this.HEIGHT / this.rows);
        this.blockWidth = this.sketch.floor(this.WIDTH / this.columns);
        this.iterateOverMap();

        // Set Pokemon generic for the first launch
        if (this.mapName == tutorial && this.firstLaunch) {
            this.idx = this.getMusicIndex('pokemonGeneric.mp3');
            this.firstLaunch = false;
        }

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

        // Iterate over map to add element
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

                if (this.mapElement[x][y].isDoor) {
                    this.door = this.mapElement[x][y];
                }
            }
        }
    }


    //************************************* USER FUNCTIONS *************************************/

    // Get a specific element from protagonist
    getElement(direction, distance) {
        if (distance < 0) return false
        let x = this.protagonist.posX;
        let y = this.protagonist.posY;
        let element = null;
        if (direction === 'left' || direction === this.sketch.LEFT_ARROW) {
            if (x < 0 + distance) throw new ElementOutOfMapError // If it's out of the map
            element = this.mapElement[x - distance][y];
            if (element.isObjective) this.objective = element;
        }

        else if (direction === 'right' || direction === this.sketch.RIGHT_ARROW) {
            if (x >= this.columns - distance) throw new ElementOutOfMapError // If it's out of the map
            element = this.mapElement[x + distance][y];
            if (element.isObjective) this.objective = element;
        }

        else if (direction === 'up' || direction === this.sketch.UP_ARROW) {
            if (y < 0 + distance) throw new ElementOutOfMapError // If it's out of the map
            element = this.mapElement[x][y - distance];
            if (element.isObjective) this.objective = element;
        }

        else if (direction === 'down' || direction === this.sketch.DOWN_ARROW) {
            if (y >= this.rows - distance) throw new ElementOutOfMapError // If it's out of the map
            element = this.mapElement[x][y + distance];
            if (element.isObjective) this.objective = element;
        }
        else return null

        return element.constructor.name.toString() // Return the name of the class's element in string
    }

    // Swap 2 sprites
    swapSprite(direction, distanceFrom, distanceTo) {
        if (distanceFrom > distanceTo) {
            throw "Parameter 'distanceTo' has to be >= than 'distanceFrom'"
        }
        if (distanceFrom >= this.rows || distanceTo >= this.rows) throw "Parameters cant be higher that the size of map"
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
            if (x - distanceTo < 0) throw new PushOutOfMapError
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
            if (y - distanceTo < 0) throw new PushOutOfMapError
            let temp = this.mapElement[x][y - distanceFrom];
            this.mapElement[x][y - distanceFrom] = this.mapElement[x][y - distanceTo];
            this.mapElement[x][y - distanceTo] = temp;
        }
        this.refreshPos();
        return true
    }

    // Get Max WIDTH of the map
    getXMapSize() {
        return this.columns
    }

    // Get MAX HEIGHT of the map
    getYMapSize() {
        return this.rows
    }

    // Get PosX of the protagonist
    getPosX() {
        return this.protagonist.posX
    }
    // Get PosY of the protagonist
    getPosY() {
        return this.protagonist.posY
    }

    // Get all objectives on the current map
    getObjectives() {
        return this.objectives.toString()
    }

    // Take objective and replace it with a road sprite
    takeObjective() {
        this.objectives -= 1;
        this.mapElement[this.objective.posX][this.objective.posY] = new Road(this, this.objective.x, this.objective.y, 'roadImg');
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

    loadLevel(level) {
        console.log(this.levels.length);
        if (level >= 0 && level < this.levels.length) {
            this.level = level - 1;
            this.nextLevel();
            return true
        }
        else throw "Level doesn't exist"
    }

    // Change level depending on your current level.
    nextLevel() {
        if (this.setProduction && !this.isDoorOpen()) throw "LA PORTE EST FERMEE"
        this.level += 1;

        if (this.level >= this.levels.length) this.level = 0;
        this.mapName = this.levels[this.level];
        if (this.mapName.background != '' && (typeof this.mapName.background === 'string')) {
            this.background = this.mapName.background;
        }
        else this.background = this.DEFAULTBGCOLOR;
        if (this.mapName.music != '' && typeof this.mapName.music === 'string') this.setMusic(this.mapName.music);

        // Launch config to reload next level map
        this.objectives = 0;
        this.preload(this.mapName);
        this.setup();
        return true
    }


    //************************************* LEVEL GETTER/SETTER *************************************/
    getCurrentLevelName() {
        return this.levels[this.level].name
    }

    getLevelName(level) {
        if (level < this.levels.length)
            for (const [index] of this.levels.entries()) {
                if (this.levels[index].name == this.levels[level].name) return this.levels[level].name
            }
        return false
    }

    //************************************* MUSIC FUNCTIONS *************************************/

    getCurrentMusic() {
        return this.musicLoaded[this.idx].url
    }

    getMusicIndex(musicName) {
        for (const [index] of this.musicLoaded.entries()) {
            // If we find the music
            if (this.musicLoaded[index].url == `${this.assetsBasePath}/${this.musicBasePath}/${musicName}`) {
                return index
            }
        }
        return false
    }

    // Function to load a music by his name. Need to put full name of music ('music1.mp3')
    setMusic(musicName) {
        for (const [index] of this.musicLoaded.entries()) {
            // If we find the music
            if (this.musicLoaded[index].url == `${this.assetsBasePath}/${this.musicBasePath}/${musicName}`) {
                if (this.musicPlaying) {
                    this.musicLoaded[this.idx].stop();
                    this.idx = index;
                    this.musicLoaded[this.idx].loop();
                }
                else this.idx = index;
            }
        }
        return true
    }

    // Key type to catch capslock character
    // Handle music navigation
    keyTyped() {
        switch (this.sketch.key) {
            // Play ON/OFF the music
            case 'M':
                if (this.musicPlaying) {
                    this.musicLoaded[this.idx].pause();
                    this.musicPlaying = false;
                }
                else {
                    this.musicLoaded[this.idx].loop(0, 1, this.volume);
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
                if (this.idx < 0) this.idx = this.musicLoaded.length - 1;
                this.musicLoaded[this.idx].loop(0, 1, this.volume);
                this.musicPlaying = true;
                break

            // Increase the volume
            case '+':
                if (this.volume + 0.05 >= 1) this.volume = 1;
                else this.volume += 0.05;
                this.musicLoaded[this.idx].setVolume(this.volume);
                break

            // Lower the volume
            case '-':
                if (this.volume - 0.05 <= 0) this.volume = 0;
                else this.volume -= 0.05;
                this.musicLoaded[this.idx].setVolume(this.volume);
                break

            // RESET Current game
            case 'R':
                this.objectives = 0;
                this.setup(this.mapName);
                break;
        }
        if (!this.setProduction && this.sketch.key >= 0 && this.sketch.key <= this.levels.length-1) {
            this.loadLevel(this.sketch.key);
        }
    }


    //************************************* GAME LOGIC  *************************************/

    // To remove before pushing production: the user has to code it in php or ruby
    keyPressed() {
        let s = this.sketch;
        if (s.keyCode === s.LEFT_ARROW || s.keyCode === s.RIGHT_ARROW || s.keyCode === s.UP_ARROW || s.keyCode === s.DOWN_ARROW) {
            let element = this.getElement(s.keyCode, 1);
            switch (element) {
                case "Road":
                    this.swapSprite(s.keyCode, 0, 1);
                    break

                case "Boulder":
                    if (this.getElement(s.keyCode, 2) != "Road") break
                    this.swapSprite(s.keyCode, 1, 2);
                    this.swapSprite(s.keyCode, 0, 1);
                    break

                case "Objective":
                    this.takeObjective();
                    this.swapSprite(s.keyCode, 0, 1);
                    if (this.getObjectives() == 0) {
                        this.openDoor();
                        if (this.getCurrentLevelName() == 'davide'){
                            this.setMusic('bonus.mp3');
                            this.background = this.sketch.loadImage(`${this.assetsBasePath}/davide/background.jpg`);
                        } 
                    }
                    break

                case "Door":
                    if (this.isDoorOpen()) this.nextLevel();
                    break
            }
        }
        return true
    }


    // Refresh sprite when swapping two elements
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

    // Wait for the user until he pressed a key
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
            // Movement
            case 'keyPressed':
                return this.keyPressed()

            case 'getElement':
                return this.getElement(command.params[0], command.params[1]) // Return string of the element

            case 'swapSprite':
                return this.swapSprite(command.params[0], command.params[1], command.params[2]) // Return true

            // Objectives   
            case 'getObjectives':
                return this.getObjectives() // Return numerical string
            
            case 'takeObjective':
                return this.takeObjective() // Return true
            
            // Door
            case 'isDoorOpen':
                return this.isDoorOpen()    // Return true
            
            case 'openDoor':
                return this.openDoor()  // Return true
            
            case 'closeDoor':
                return this.closeDoor() // Return true
            
            // Level
            case 'nextLevel':
                return this.nextLevel() // Return true or false
            
            case 'loadLevel':
                return this.loadLevel(command.params)

            case 'getCurrentLevelName':
                return this.getCurrentLevelName() // Return Int

            case 'getLevelName': 
                return this.getLevelName() // Return string


            // Position
            case 'getXMapSize':
                return this.getXMapSize() // Return Int

            case 'getYMapSize':
                return this.getYMapSize() // Return Int

            case 'getPosX':
                return this.getPosX()   // Return Int

            case 'getPosY':
                return this.getPosY()   // Return Int

            // Music
            case 'getCurrentMusic':
                return this.getCurrentMusic() // Return string

            case 'getMusicIndex':
                return this.getMusicIndex() // Return Int

            case 'setMusic':
                return this.setMusic(command.params) // Return true
        }
    }
}

export { Game };
