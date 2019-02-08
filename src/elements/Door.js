class Door extends StaticElement{
    constructor(x, y, img){
        super(x, y, img)
        this.isOpen = false
    }

    action(information){
        console.log("bienvenue dans la méthode action de la classe Door")
        return true
    }

    open(){
        this.isOpen = true
        this.img = loadImage("engine/pokedash/assets/openDoorImg.png")
        redraw()
    }

    close(){
        this.isOpen = false
        this.img = loadImage("engine/pokedash/assets/doorImg.png")
        redraw()
    }
}

// TO DELETE IF NOT USED : module.exports = Door