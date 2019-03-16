import { DynamicElement } from './DynamicElement'

import tutorial from './maps/tutorial'
import level1 from './maps/level1'
import level2 from './maps/level2'
import level3 from './maps/level3'
import { Road } from './elements/Road'
import { ElementOutOfMapError } from './CustomError'
import { PushOutOfMapError } from './CustomError'


export class Game {

    /**
     *
     * @param {HTMLElement} el game base element
     * @param {String} assetsBasePath
     */
    constructor(el, assetsBasePath) {

        this.setProduction = false // Set true when in production

        this.el = el
        this.assetsBasePath = assetsBasePath

        // Get height and width (shortcuts)
        this.HEIGHT = this.el.offsetHeight
        this.WIDTH = this.el.offsetWidth

        this.DEFAULTBGCOLOR = '#77ff33'

        this.background = this.DEFAULTBGCOLOR
        this.firstLaunch = true

        // Game Logic
        this.objectives = 0
        this.level = 0
        this.mapElement = []
        this.mapName = tutorial

        // Sound Logic and library
        this.musicBasePath = 'music'
        this.sounds = [
            `${this.assetsBasePath}/${this.musicBasePath}/bonta.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/pokemon.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/incarnam.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/lostWoods.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/lullaby.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/nemo.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/pokemonGeneric.mp3`
        ]
        this.idx = 0 // Index to select a music file
        this.musicLoaded = [] // Array to stock all the loaded and processes by p5 music
        this.musicPlaying = false
        this.volume = 1

        // Map p5 functions to our game functions
        let s = (sketch) => {
            // Allow to acces the p5 sketch into our game class
            this.sketch = sketch
            sketch.preload = () => { this.preload() }
            sketch.setup = () => { this.setup() }
            sketch.draw = () => { this.draw() }
            sketch.keyPressed = () => { this.keyPressed() }
            sketch.keyTyped = () => { this.keyTyped() }
        }

        // Initialize p5
        this.myp5 = new window.p5(s, this.el)


    }

    //************************************* P5 FUNCTIONS *************************************/
    // Initiation of assets loading and display

    preload(mapName) {
        if (mapName) this.mapName = mapName
        else this.mapName = tutorial

        // Create PokedashGame's classes attribute amongst element found in the map to load in param
        // Example: Create this.protagonist and this.protagonistImg
        for (let ele in this.mapName.e) {
            let eName = this.mapName.e[ele].name.toLowerCase()
            this[eName] = null
            // We don't display road image
            if (eName == 'road') {
                this[eName + "Img"] = null
                continue
            }
            // Create new image attribute
            this[eName + "Img"] = this.sketch.loadImage(`${this.assetsBasePath}/${this.mapName.template}/${eName}Img.png`) // -> this.protagonistImg = loadImg(assets/protagonistImg.png)
        }

        // Load Music
        // Only load music at first launch because it loads all music at once
        if(this.firstLaunch){
            this.sketch.shuffle(this.sounds, true);
            for (let s of this.sounds) {
                this.musicLoaded.push(this.sketch.loadSound(s))
            }
        }
    }

    setup() {
        if (this.mapName == undefined) this.mapName = tutorial
        // Define dimension of the map and of each block
        this.sketch.createCanvas(this.HEIGHT, this.WIDTH)
        this.columns = this.mapName.pattern.length
        this.rows = this.mapName.pattern[0].length
        this.blockHeight = this.sketch.floor(this.HEIGHT / this.rows)
        this.blockWidth = this.sketch.floor(this.WIDTH / this.columns)
        this.iterateOverMap()

        // Set Pokemon generic for the first launch
        if(this.mapName == tutorial && this.firstLaunch) {
            this.idx = this.getMusic('pokemonGeneric.mp3')
            this.firstLaunch = false
        }
        
    }

    draw() {
        this.sketch.background(this.background)
        for (let y = 0; y < this.columns; y++) {
            for (let x = 0; x < this.rows; x++) {
                if (this.mapElement[x][y].constructor.name == 'Road') continue
                else this.mapElement[x][y].show()
            }
        }
    }

    //Function to iterate through the pattern map to fill the array map
    iterateOverMap() {
        if (this.mapName == undefined) this.mapName = tutorial
        //Instantiate 2d array in mapElement
        for (let i = 0; i < this.rows; i++) {
            this.mapElement[i] = new Array(this.columns)
        }

        // Iterate over map to add element
        for (let y = 0; y < this.columns; y++) {
            for (let x = 0; x < this.rows; x++) {
                // Instantiate objects in the 2D array
                let idElement = this.mapName.pattern[y][x]
                let element = this.mapName.e[idElement].name
                let elementImg = element.toLowerCase() + 'Img'
                this.mapElement[x][y] = new DynamicElement(this, element, x * this.blockWidth, y * this.blockHeight, this[elementImg])

                // Récupère la position du joueur dans le tableau d'objet
                if (this.mapElement[x][y].isProtagonist) {
                    this.protagonist = this.mapElement[x][y]
                }

                // Récupère le nombre d'objectifs dans le jeu
                if (this.mapElement[x][y].isObjective) {
                    this.objectives += 1
                }

                if (this.mapElement[x][y].isDoor) {
                    this.door = this.mapElement[x][y]
                }
            }
        }
    }


    //************************************* USER FUNCTIONS *************************************/

    // Get a specific element from protagonist
    getElement(direction, distance) {
        if (distance < 0) return false
        let x = this.protagonist.posX
        let y = this.protagonist.posY
        let element = null
        if (direction === 'left' || direction === this.sketch.LEFT_ARROW) {
            if (x < 0 + distance) throw new ElementOutOfMapError // If it's out of the map
            element = this.mapElement[x - distance][y]
            if (element.isObjective) this.pokeball = element
        }

        else if (direction === 'right' || direction === this.sketch.RIGHT_ARROW) {
            if (x >= this.columns - distance) throw new ElementOutOfMapError // If it's out of the map
            element = this.mapElement[x + distance][y]
            if (element.isObjective) this.pokeball = element
        }

        else if (direction === 'up' || direction === this.sketch.UP_ARROW) {
            if (y < 0 + distance) throw new ElementOutOfMapError // If it's out of the map
            element = this.mapElement[x][y - distance]
            if (element.isObjective) this.pokeball = element
        }

        else if (direction === 'down' || direction === this.sketch.DOWN_ARROW) {
            if (y >= this.rows - distance) throw new ElementOutOfMapError // If it's out of the map
            element = this.mapElement[x][y + distance]
            if (element.isObjective) this.pokeball = element
        }
        else return null

        return element.constructor.name.toString() // Return the name of the class's element in string
    }

    // Swap 2 sprites
    swapSprite(direction, distanceFrom, distanceTo) {
        if (distanceFrom > distanceTo) {
            throw "Parameter 'distanceTo' has to be >= than 'distanceFrom'"
        }
        let x = this.protagonist.posX
        let y = this.protagonist.posY
        let s = this.sketch

        if (direction === 'right' || direction === s.RIGHT_ARROW) {
            if (x + distanceFrom > this.columns - distanceTo) throw new PushOutOfMapError
            let temp = this.mapElement[x + distanceFrom][y]
            this.mapElement[x + distanceFrom][y] = this.mapElement[x + distanceTo][y]
            this.mapElement[x + distanceTo][y] = temp
        }
        if (direction === 'left' || direction === s.LEFT_ARROW) {
            if (x - distanceFrom <= 0) throw new PushOutOfMapError
            let temp = this.mapElement[x - distanceFrom][y]
            this.mapElement[x - distanceFrom][y] = this.mapElement[x - distanceTo][y]
            this.mapElement[x - distanceTo][y] = temp
        }
        if (direction === 'down' || direction === s.DOWN_ARROW) {
            if (y + distanceFrom > this.rows - distanceTo) throw new PushOutOfMapError
            let temp = this.mapElement[x][y + distanceFrom]
            this.mapElement[x][y + distanceFrom] = this.mapElement[x][y + distanceTo]
            this.mapElement[x][y + distanceTo] = temp
        }
        if (direction === 'up' || direction === s.UP_ARROW) {
            if (y - distanceFrom <= 0) throw new PushOutOfMapError
            let temp = this.mapElement[x][y - distanceFrom]
            this.mapElement[x][y - distanceFrom] = this.mapElement[x][y - distanceTo]
            this.mapElement[x][y - distanceTo] = temp
        }
        this.refreshPos()
        return true
    }

    // Get all objectives on the current map
    getObjectives() {
        return this.objectives.toString()
    }

    // Take objective and replace it with a road sprite
    takeObjective() {
        this.objectives -= 1
        this.mapElement[this.pokeball.posX][this.pokeball.posY] = new Road(this, this.pokeball.x, this.pokeball.y, 'roadImg')
        return true
    }

    isDoorOpen() {
        return this.mapElement[this.door.posX][this.door.posY].isOpen
    }

    openDoor() {
        if (this.objectives != 0) throw "You can't open door while there is still existing objective"
        this.mapElement[this.door.posX][this.door.posY].open()
        return true
    }

    closeDoor() {
        this.mapElement[this.doorPosX][this.doorPosY].close()
        return true
    }

    loadLevel(level){
        if(level >= 0 && level < 4){
            this.level = level-1
            this.nextLevel()
            return true
        }
        else throw "Level must be between 0 and 4"
    }

    // Change level depending on your current level.
    nextLevel() {
        if (this.setProduction && !this.isDoorOpen()) throw "LA PORTE EST FERMEE"
        this.level += 1
        switch (this.level) {
            case 0:
                this.mapName = tutorial
                this.background = this.DEFAULTBGCOLOR               
                break;
            case 1:
                this.mapName = level1
                this.background = '#619b1f'
                this.setMusic('lostWoods.mp3')
                break
            case 2:
                this.mapName = level2
                this.background = '#3a7eea' // Blue
                this.setMusic('nemo.mp3')
                break
            case 3:
                this.mapName = level3
                this.background = this.DEFAULTBGCOLOR // Blue
                break
            default:
                this.mapName = tutorial
                if(this.level == 4){ // The music will load only once when you "finish" the game
                    this.setMusic('pokemon.mp3') 
                }
                break
        }
        // Launch config to reload next level map
        this.objectives = 0
        this.preload(this.mapName)
        this.setup()
        return true
    }


    //************************************* MUSIC FUNCTIONS *************************************/

    getMusicPlaying() {
        return this.musicLoaded[this.index].url
    }

    getMusic(musicName){
        for (const [index] of this.musicLoaded.entries()) {
            // If we find the music
            if (this.musicLoaded[index].url == `${this.assetsBasePath}/${this.musicBasePath}/${musicName}`) {
                return index
            }
        }
    }

    // Function to load a music by his name. Need to put full name of music ('music1.mp3')
    setMusic(musicName) {
        for (const [index] of this.musicLoaded.entries()) {
            // If we find the music
            if (this.musicLoaded[index].url == `${this.assetsBasePath}/${this.musicBasePath}/${musicName}`) {
                if(this.musicPlaying){
                    this.musicLoaded[this.idx].stop()
                    this.idx = index
                    this.musicLoaded[this.idx].loop()
                }
                else this.idx=index             
            }
        }
    }

    // Key type to catch capslock character
    // Handle music navigation
    keyTyped() {
       
        switch (this.sketch.key) {
            // Play ON/OFF the music
            case 'M':
                if (this.musicPlaying) {
                    this.musicLoaded[this.idx].pause()
                    this.musicPlaying = false
                }
                else {
                    this.musicLoaded[this.idx].loop(0, 1, this.volume)
                    this.musicPlaying = true
                }
                break

            // Play Next song 
            case 'N':
                this.musicLoaded[this.idx].stop()
                this.idx += 1
                if (this.idx >= this.musicLoaded.length) this.idx = 0
                this.musicLoaded[this.idx].loop(0, 1, this.volume)
                this.musicPlaying = true
                break

            // Play Last song 
            case 'B':
                this.musicLoaded[this.idx].stop()
                this.idx = this.idx - 1
                if (this.idx < 0) this.idx = this.musicLoaded.length - 1
                this.musicLoaded[this.idx].loop(0, 1, this.volume)
                this.musicPlaying = true
                break

            // Increase the volume
            case '+':
                if (this.volume + 0.05 >= 1) this.volume = 1
                else this.volume += 0.05
                this.musicLoaded[this.idx].setVolume(this.volume)
                break

            // Lower the volume
            case '-':
                if (this.volume - 0.05 <= 0) this.volume = 0
                else this.volume -= 0.05
                this.musicLoaded[this.idx].setVolume(this.volume)
                break

            // RESET Current game
            case 'R':
                this.objectives = 0
                this.setup(this.mapName)
                break;
        }
        if(!this.setProduction && this.sketch.key >= 0 && this.sketch.key <=3){
            this.loadLevel(this.sketch.key)
        }
    }


    //************************************* GAME LOGIC  *************************************/

    // To remove before pushing production: the user has to code it in php or ruby
    keyPressed() {
        let s = this.sketch
        if (s.keyCode === s.LEFT_ARROW || s.keyCode === s.RIGHT_ARROW || s.keyCode === s.UP_ARROW || s.keyCode === s.DOWN_ARROW) {

            let element = this.getElement(s.keyCode, 1)
            switch (element) {
                case "Road":
                    this.swapSprite(s.keyCode, 0, 1)
                    break

                case "Boulder":
                    if (this.getElement(s.keyCode, 2) != "Road") break
                    this.swapSprite(s.keyCode, 1, 2)
                    this.swapSprite(s.keyCode, 0, 1)
                    break

                case "Pokeball":
                    this.takeObjective()
                    this.swapSprite(s.keyCode, 0, 1)
                    if (this.getObjectives() == 0) {
                        this.openDoor()
                    }
                    break

                case "Door":
                    if (this.isDoorOpen()) this.nextLevel()
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
                this.mapElement[x][y].x = x * this.blockWidth
                this.mapElement[x][y].posX = x
                this.mapElement[x][y].y = y * this.blockHeight
                this.mapElement[x][y].posY = y
            }
        }
    }

    // Wait for the user until he pressed a key
    waitUntilKeyPressed() {
        console.log('Wait the user pres an arrow key !')
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
        command = JSON.parse(command)

        switch (command.action) {
            case 'getElement':
                return this.getElement(command.params[0], command.params[1]) // Return string of the element

            case 'swapSprite':
                return this.swapSprite(command.params[0], command.params[1], command.params[2]) // Return true

            case 'loadLevel':
                return this.loadLevel(command.params)

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