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
    music: 'pokemon.mp3',
   
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
    music: '',
   
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

var zeldaRed = {
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
    name: 'zeldaRed',
    template: 'zeldaRed',
    background: '#dd7a37',
    music: 'zeldaRed.mp3',

    pattern: [
        [4,4,4,4,4,4,4,4,4,1,4,4,4,4,4,4],
        [4,9,3,1,3,1,1,3,1,9,9,9,9,3,9,4],
        [4,9,9,9,4,1,1,3,1,3,9,3,9,3,9,4],
        [4,9,4,9,4,1,9,9,3,9,3,9,3,4,1,4],
        [4,9,4,9,4,3,9,3,9,3,9,9,9,3,9,9],
        [4,1,4,9,4,3,3,9,3,9,1,9,1,3,4,4],
        [4,9,4,1,4,3,9,3,4,4,4,4,4,9,3,4],
        [4,9,4,9,4,9,9,9,3,9,4,4,9,4,9,4],
        [4,9,4,9,4,3,4,3,4,9,4,4,9,2,9,4],
        [4,9,4,9,4,1,3,1,4,1,4,4,4,9,4,4],
        [4,1,4,9,4,1,1,1,4,1,4,9,4,9,4,4],
        [4,9,4,9,4,9,3,9,9,9,4,9,4,9,4,4],
        [4,9,4,9,4,3,9,3,4,9,4,9,4,9,4,4],
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
    constructor({ element, assetsBasePath, console }) {

        this.debugMode = false; // Set true to use arroy keys and load level with number key

        this.el = element;
        this.assetsBasePath = assetsBasePath;
        this.console = console;
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
            zeldaRed,
            davide
        ];
        this.objectives = 0;
        this.level = 0;
        this.mapName = tutorial;
        this.mapElement = []; // 2d array to stock all the elements of the game

        // Sound Logic and library
        this.musicBasePath = 'music';
        this.musics = [
            `${this.assetsBasePath}/${this.musicBasePath}/pokemon.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/lostWoods.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/davide.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/bonus.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/zeldaRed.mp3`
        ];

        this.idx = 0; // Index to select a music file
        this.musicLoaded = []; // Array to stock all the loaded and processes by p5 music
        this.musicPlaying = false;
        this.volume = 1; // Volume goes from 0 to 1. 1 represent the sound's level you have set on your computer

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
    /**
     * You can find the p5 documentation here: https://p5js.org/
     */

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
    }

    // Create canvas and height of element
    setup() {
        if (this.mapName == undefined) this.mapName = tutorial;
        // Define dimension of the map and of each block
        this.sketch.createCanvas(this.HEIGHT, this.WIDTH);
        this.columns = this.mapName.pattern.length;
        this.rows = this.mapName.pattern[0].length;
        this.blockHeight = this.sketch.floor(this.HEIGHT / this.rows);
        this.blockWidth = this.sketch.floor(this.WIDTH / this.columns);
        this.sketch.frameRate(30); // Reduce the frame tick of the draw() function
        this.iterateOverMap();
        // Load Music
        // Only load music at first launch to avoid reloading music each time we change a level
        if (this.firstLaunch) {
            this.sketch.shuffle(this.musics, true);
            for (let m of this.musics) {
                this.musicLoaded.push(this.sketch.loadSound(m));
            }
        }

        // Set Pokemon generic for the first launch
        if (this.mapName == tutorial && this.firstLaunch) {
            if (this.getMusicIndex('pokemon.mp3')) this.idx = this.getMusicIndex('pokemon.mp3');
            this.firstLaunch = false;
        }
    }

    // Draw the assets
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

    /**
     * --------------------------------- GAME MAP FUNCTIONS ---------------------------------
     * --------------------------------------------------------------------------------------
     */

    //************* MAP POSITIONS AND LIMITS *************
    // Get Max WIDTH of the map
    getMapSizeX() {
        return this.columns
    }

    // Get MAX HEIGHT of the map
    getMapSizeY() {
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

    // Check if the distance selected from the protagonist is in the map array
    isInMap(posX, posY, mapXSize, mapYSize, dir, distance) {
        switch (dir) {
            // LEFT
            case 37:
                if (posX - distance < 0) return false
                return true
            // UP
            case 38:
                if (posY - distance < 0) return false
                return true

            // RIGHT
            case 39:
                if (posX >= mapXSize - distance) return false
                return true

            // DOWN
            case 40:
                if (posY >= mapYSize - distance) return false
                return true
        }
        return false
    }

    //************* MOVEMENT *************
    // Get a specific element from protagonist
    getElement(direction, distance) {
        if (distance < 0) return false
        let x = this.protagonist.posX;
        let y = this.protagonist.posY;
        let element = null;
        if (!this.isInMap(x, y, this.columns, this.rows, direction, distance)) {
            //throw new ElementOutOfMapError
            // You can avoid processus to stop if you remplace the throw error with the code below : 
            this.console.error("Can't get element out of map !");
            return false
        }
        if (direction === 'left' || direction === this.sketch.LEFT_ARROW) {
            element = this.mapElement[x - distance][y];
            if (element.isObjective) this.objective = element;
        }

        else if (direction === 'right' || direction === this.sketch.RIGHT_ARROW) {
            element = this.mapElement[x + distance][y];
            if (element.isObjective) this.objective = element;
        }

        else if (direction === 'up' || direction === this.sketch.UP_ARROW) {
            element = this.mapElement[x][y - distance];
            if (element.isObjective) this.objective = element;
        }

        else if (direction === 'down' || direction === this.sketch.DOWN_ARROW) {
            element = this.mapElement[x][y + distance];
            if (element.isObjective) this.objective = element;
        }
        else return null

        return element.constructor.name.toString() // Return the name of the class's element in string
    }

    // Swap 2 sprites
    swapSprite(direction, distanceFrom, distanceTo) {
        if (distanceFrom > distanceTo) {
            throw new Error("Parameter 'distanceTo' has to be >= than 'distanceFrom'")
        }
        if (distanceFrom >= this.rows || distanceTo >= this.rows) throw new Error("Parameters cant be higher that the size of map")
        let x = this.protagonist.posX;
        let y = this.protagonist.posY;
        let s = this.sketch;

        if (!this.isInMap(x, y, this.columns, this.rows, direction, distanceTo)) {

            //throw new SwapOutOfMapError
            // You can avoid processus to stop if you remplace the throw error with the code below :
            this.console.error("Can't swap an element out of map !");
            return false
        }

        if (direction === 'right' || direction === s.RIGHT_ARROW) {
            let temp = this.mapElement[x + distanceFrom][y];
            this.mapElement[x + distanceFrom][y] = this.mapElement[x + distanceTo][y];
            this.mapElement[x + distanceTo][y] = temp;
        }
        if (direction === 'left' || direction === s.LEFT_ARROW) {
            let temp = this.mapElement[x - distanceFrom][y];
            this.mapElement[x - distanceFrom][y] = this.mapElement[x - distanceTo][y];
            this.mapElement[x - distanceTo][y] = temp;
        }
        if (direction === 'down' || direction === s.DOWN_ARROW) {
            let temp = this.mapElement[x][y + distanceFrom];
            this.mapElement[x][y + distanceFrom] = this.mapElement[x][y + distanceTo];
            this.mapElement[x][y + distanceTo] = temp;
        }
        if (direction === 'up' || direction === s.UP_ARROW) {
            let temp = this.mapElement[x][y - distanceFrom];
            this.mapElement[x][y - distanceFrom] = this.mapElement[x][y - distanceTo];
            this.mapElement[x][y - distanceTo] = temp;
        }
        this.refreshPos();
        return true
    }

    //************* OBJECTIVES *************
    // Get all objectives on the current map
    getObjectives() {
        return this.objectives
    }

    // Take objective and replace it with a road sprite
    takeObjective() {
        try {
            this.mapElement[this.objective.posX][this.objective.posY] = new Road(this, this.objective.x, this.objective.y, 'roadImg');
            this.objectives -= 1;
            this.objective.posX = null;
            this.objective.posY = null;
            return true
        }
        catch{
            this.console.warning('No objective at this position.');
        }
        return false
    }

    //************* DOOR *************
    isDoorOpen() {
        return this.mapElement[this.door.posX][this.door.posY].isOpen
    }

    openDoor() {
        if (this.objectives != 0) {
            this.console.warning("You can't open the door while there are still objectives left");
            return false
        }
        this.mapElement[this.door.posX][this.door.posY].open();
        return true
    }

    closeDoor() {
        if (this.mapElement[this.door.posX][this.door.posY].isOpen) {
            this.mapElement[this.door.posX][this.door.posY].close();
            return true
        }
        return false
    }

    //************* LEVEL *************
    //Load a specific level
    loadLevel(level) {
        if (level >= 0 && level < this.levels.length) {
            this.level = level - 1;
            this.nextLevel();
            return true
        }
        else {
            this.console.error("This level doesn't exist");
            return false
        }
    }

    // Load the next level
    nextLevel() {
        if (!this.debugMode && !this.isDoorOpen()) {
            this.console.warning("You can't access the next level, the door is closed.. Why ?");
            return false
        }
        this.level += 1;

        if (this.level >= this.levels.length) this.level = 0;
        this.mapName = this.levels[this.level];
        if (this.mapName.background != '' && (typeof this.mapName.background === 'string')) {
            this.background = this.mapName.background;
        }
        else this.background = this.DEFAULTBGCOLOR;
        if (this.mapName.music != '' && typeof this.mapName.music === 'string') this.playMusicNamed(this.mapName.music);

        // Launch config to reload next level map
        this.objectives = 0;
        this.preload(this.mapName);
        this.setup();
        return true
    }

    // Get the current level name in string
    getCurrentLevelName() {
        return this.levels[this.level].name
    }

    // Return the level
    getCurrentLevelIndex(){
        return this.level
    }

    // Get the name of a specific level (int)
    getLevelName(level) {
        if (level < this.levels.length)
            for (const [index] of this.levels.entries()) {
                if (this.levels[index].name == this.levels[level].name) return this.levels[level].name
            }
        return false
    }

    //************************************* MUSIC *************************************/$
    // Get the current music name
    getCurrentMusicName() {
        if (!this.musics) return false
        if (this.musicExists(this.idx)) return this.splitMusicUrl(this.idx)
    }

    getCurrentMusicIndex(){
        if(!this.musics) return false
        if(this.musicExists(this.idx)) return this.idx
    }
    // Get the name of a track 
    getMusicName(index) {
        if (this.musicExists(index)) return this.splitMusicUrl(index)
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

    // Load a music by his name ('music.mp3')
    playMusicNamed(musicName) {
        for (const [index] of this.musicLoaded.entries()) {
            // If we find the music

            if (this.splitMusicUrl(index) == musicName) {
                if (this.musicPlaying) {
                    this.musicLoaded[this.idx].stop();
                    this.idx = index;
                    this.musicLoaded[this.idx].loop(0, 1, this.volume);
                    return true
                }
                else {
                    this.idx = index;
                    return true
                }
            }
        }
        this.console.warning("This music does not exist in our library");
        return false
    }

    playMusicIndex(index){
        if(this.musicExists(index)){
            if (this.musicPlaying) {
                this.musicLoaded[this.idx].stop();
                this.idx = index;
                this.musicLoaded[this.idx].loop(0, 1, this.volume);
                return true
            }
            else {
                this.idx = index;
                return true
            }
        }
        return false
    }

    // ------- Functions not disponible for the user in php or ruby. Tools music functions
    // Music verification functions
    musicExists(index) {
        if (index >= this.musicLoaded.length || index < 0) {
            this.console.error("The music doesn't exists ! There is only " + this.musicLoaded.length + " musics.");
            return false
        }
        return true
    }
    splitMusicUrl(index) {
        //Check the music exists in the library
        if (this.musicExists(index)) {
            let musicName = this.musicLoaded[index].url.split("/");
            return musicName[musicName.length - 1];
        }
    }

    //************************************* KEY EVENTS  *************************************/
    // Wait for the user until he pressed a key. Return a keycode
    waitUntilKeyPressed() {
        return new Promise(resolve => {
            document.addEventListener('keyup', resolve, { once: true });
        })
    }

    // Key type to catch capslock character
    // Handle music navigation and restart level
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
        if (this.debugMode && this.sketch.key >= 0 && this.sketch.key <= this.levels.length - 1) {
            this.loadLevel(this.sketch.key);
        }
    }

    // Not disponible for the user in php or ruby
    // User can use the keyboard with a functionnable game in debug mode.
    keyPressed() {
        if (this.debugMode) {
            let s = this.sketch;
            if (s.keyCode === s.LEFT_ARROW || s.keyCode === s.RIGHT_ARROW || s.keyCode === s.UP_ARROW || s.keyCode === s.DOWN_ARROW) {
                if (!this.isInMap(this.getPosX(), this.getPosY(), this.getMapSizeX(), this.getMapSizeY(), s.keyCode, 1)) return false
                let element = this.getElement(s.keyCode, 1);
                switch (element) {
                    case "Road":
                        this.swapSprite(s.keyCode, 0, 1);
                        break

                    case "Boulder":
                        if (!this.isInMap(this.getPosX(), this.getPosY(), this.getMapSizeX(), this.getMapSizeY(), s.keyCode, 2)) break
                        if (this.getElement(s.keyCode, 2) != "Road") break
                        this.swapSprite(s.keyCode, 1, 2);
                        this.swapSprite(s.keyCode, 0, 1);
                        break

                    case "Objective":
                        this.takeObjective();
                        this.swapSprite(s.keyCode, 0, 1);
                        if (this.getObjectives() == 0) {
                            this.openDoor();
                            if (this.getCurrentLevelName() == 'davide') this.playMusicNamed('bonus.mp3');
                        }
                        break

                    case "Door":
                        if (this.isDoorOpen()) this.nextLevel();
                        break
                }
            }
        }
        return true
    }

    // ******** CONSOLE *********
    writeConsole(value) {
        this.console.log(value.toString());
        return true
    }

    // Refresh sprite when swapping two elements. Not disponible for the user
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

    /**
     * Execute php or ruby functions got in response from the server to execute them locally
     * 
     * @param {string} command
     * @return {string} command output
     */
    async executeGameCommand(command) {
        // Execute the command in your game and return the result
        command = JSON.parse(command);

        switch (command.action) {
            // Check map limit
            case 'isInMap':
                return this.isInMap(command.params[0], command.params[1], command.params[2], command.params[3], command.params[4], command.params[5]) // Params: posX, posY, limMapX, limMapY, direction, distance

            // Movement
            case 'waitUntilKeyPressed':
                let tutu = await this.waitUntilKeyPressed();
                return tutu.keyCode

            case 'getElement':
                return this.getElement(command.params[0], command.params[1]) // Params: direction, distance

            case 'swapSprite':
                return this.swapSprite(command.params[0], command.params[1], command.params[2]) // Params: direction, distanceFrom, distanceTo

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
                if (!this.debugMode && !this.isDoorOpen()) {
                    this.console.warning("Can't access to the next level");
                    return false
                }
                return this.nextLevel() // Return true or false

            case 'loadLevel':
                return this.loadLevel(command.params) // params: level (int)

            case 'getCurrentLevelName':
                return this.getCurrentLevelName() // Return Int

            case 'getCurrentLevelIndex':
                return this.getCurrentLevelIndex()
    
            case 'getLevelName':
                return this.getLevelName() // Return string

            // Position
            case 'getMapSizeX':
                return this.getMapSizeX() // Return Int

            case 'getMapSizeY':
                return this.getMapSizeY() // Return Int

            case 'getPosX':
                return this.getPosX()   // Return Int

            case 'getPosY':
                return this.getPosY()   // Return Int

            // Music
            case 'getCurrentMusicName':
                return this.getCurrentMusicName() // Return string

            case 'getCurrentMusicIndex':
                return this.getCurrentMusicIndex()

            case 'getMusicIndex':
                return this.getMusicIndex(command.params) // params: name (string)

            case 'getMusicName':
                return this.getMusicName(command.params) // params: index (int)

            case 'playMusicIndex':
                return this.playMusicIndex(command.params)  // params: name (string)

            case 'playMusicNamed':
                return this.playMusicNamed(command.params) //  params: name

            // Console
            case 'writeConsole':
                return this.writeConsole(command.params) // params: value
        }
    }
}

export { Game };
