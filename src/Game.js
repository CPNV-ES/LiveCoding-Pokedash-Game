import { DynamicElement } from './DynamicElement'

import tutorial from './maps/tutorial'
import level1 from './maps/level1'
import level2 from './maps/level2'
import level3 from './maps/level3'
import { Road } from './elements/Road'
import { CustomError } from './CustomError'
import { ElementOutOfMapError } from './CustomError'
import { PushOutOfMapError } from './CustomError'


export class Game {

    /**
     *
     * @param {HTMLElement} el game base element
     * @param {String} assetsBasePath
     */
    constructor(el, assetsBasePath) {

        this.el = el
        this.assetsBasePath = assetsBasePath

        this.background = null

        // Some shortcuts
        this.HEIGHT = this.el.offsetHeight
        this.WIDTH = this.el.offsetWidth

        this.objectives = 0
        this.level = 0
        this.mapElement = []
        this.mapName = tutorial

        // Get manually all music from folder
        this.musicBasePath = 'music'
        this.sounds = [
            `${this.assetsBasePath}/${this.musicBasePath}/0.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/1.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/2.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/3.mp3`,
            `${this.assetsBasePath}/${this.musicBasePath}/4.mp3`,
            //`${this.assetsBasePath}/music/5.mp3`
        ]
        this.idx = 0 // Index to select a music file
        this.musicLoaded = []
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

    preload(mapName) {
        if (mapName) this.mapName = mapName
        else this.mapName = tutorial
        // Create PokedashGame's classes attribute amongst element found in the map to load in param
        // Example: Create this.protagonist and this.protagonistImg
        console.log("------------ PRELOAD() ------------")
        console.log(this.mapName)
        for (let ele in this.mapName.e) {
            let eName = this.mapName.e[ele].name.toLowerCase()
            console.log("eName: " + eName)

            //create new Attribute (for example: this.protagonist)
            this[eName] = null

            // Not rendering the road (just the background). Easier to handle
            if (eName == 'road') {
                this[eName + "Img"] = null
                continue
            }
            // Create new image attribute
            this[eName + "Img"] = this.sketch.loadImage(`${this.assetsBasePath}/${this.mapName.template}/${eName}Img.png`) // -> this.protagonistImg = loadImg(assets/protagonistImg.png)
        }

        this.sketch.shuffle(this.sounds, true);
        for (let s of this.sounds) {
            console.log('aaa' + s)
            this.musicLoaded.push(this.sketch.loadSound(s))
        }
        console.log(this.musicLoaded)
        // Load sound if there is none
        /* if(this.song == null){
             this.song = this.sketch.loadSound(`${this.assetsBasePath}/sound.mp3`)
         }  */
    }

    setup() {
        if (this.mapName == undefined) this.mapName = tutorial
        // Define dimension of the map and of each block
        console.log("------------ SETUP() ------------")
        this.sketch.createCanvas(this.HEIGHT, this.WIDTH)
        this.columns = this.mapName.pattern.length
        this.rows = this.mapName.pattern[0].length
        this.blockHeight = this.sketch.floor(this.HEIGHT / this.rows)
        this.blockWidth = this.sketch.floor(this.WIDTH / this.columns)

        // Load background
        this.background = this.sketch.loadImage(`${this.assetsBasePath}/${this.mapName.template}/background.png`)
        // new Element()
        this.iterateOverMap()

    }

    draw() {
        this.sketch.background('#77ff33')  //this.background
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
        console.log("------------ ITERATEOVERMAP() ------------")
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

                if (this.mapElement[x][y].constructor.name == "Door") {
                    this.door = this.mapElement[x][y]
                }
            }
        }
    }

    // Functions for user
    getObjectives() {
        return this.objectives.toString()
    }

    takeObjective() {
        this.objectives -= 1
        this.mapElement[this.pokeball.posX][this.pokeball.posY] = new Road(this, this.pokeball.x, this.pokeball.y, 'roadImg')
        //this.mapElement[this.pokeball.posX][this.pokeball.posY].remove()
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

    nextLevel() {
        if (!this.isDoorOpen()) throw "LA PORTE EST FERMEE"
        console.log("* * * * YOU WIN * * * *")
        this.level += 1
        switch (this.level) {
            case 1:
                this.mapName = level1
                break

            case 2:
                this.mapName = level2
                break

            case 3:
                this.mapName = level3
                break

            default:
                this.mapName = tutorial
                break
        }
        this.preload(this.mapName)
        this.setup()
        return true
    }


    // Get element from protagonist
    getElement(direction, distance, optionnal) {
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


        if (optionnal == 'admin') return element

        return element.constructor.name.toString() // Return the name of the class's element in string
    }

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

    // To handle shift + key
    keyTyped() {
        switch (this.sketch.key) {
            // Play ON/OFF the music
            case 'M':
                if (this.musicPlaying) {
                    this.musicLoaded[this.idx].pause()
                    console.log("Music paused")
                    this.musicPlaying = false
                }
                else {
                    this.musicLoaded[this.idx].loop(0, 1, this.volume)
                    console.log("Music started")
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
                if (this.idx <= 0) this.idx = this.musicLoaded.length - 1
                this.musicLoaded[this.idx].loop(0, 1, this.volume)
                this.musicPlaying = true
                break

            // Increase the volume
            case '+':
                if(this.volume+0.1 >= 1) this.volume = 1
                else this.volume += 0.1
                this.musicLoaded[this.idx].setVolume(this.volume)
                break

            // Lower the volume
            case '-':
                if(this.volume-0.1 <=0) this.volume = 0
                else this.volume -= 0.1
                this.musicLoaded[this.idx].setVolume(this.volume)
                break
        }
    }

    keyPressed() {
        let s = this.sketch
        if (s.keyCode === s.LEFT_ARROW || s.keyCode === s.RIGHT_ARROW || s.keyCode === s.UP_ARROW || s.keyCode === s.DOWN_ARROW) {

            let element = this.getElement(s.keyCode, 1)
            console.log("element: ", element)
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
        // Restart game if we press 'r'
        if (s.keyCode == 82) {
            this.objectives = 0
            this.setup(this.mapName)
        }

        return true
    }

    playNext() {
        if (this.idx == 4) this.idx = 0
        console.log("Next music incoming")
        this.idx += 1
        this.musicLoaded[this.idx].play()
    }

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
                console.log('swapSprite case')
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