class Pokeball extends MovableElement{
    constructor(x, y, img){
        super(x, y, img)
        this.isObjective = true
    }

    action(information){
        console.log("bienvenue dans la méthode action de la classe Pokeball")
        let game = PokedashGame
        /*game.mapElement[this.posX][this.posY] = game.mapElement[game.playerPosX][game.playerPosY]
        game.mapElement[game.playerPosX][game.playerPosY] = new DynamicElement(Road, game.playerPosX*game.blockHeight, game.playerPosY*game.blockWidth, game.roadImg)
        Protagonist.pokeball += 1
        game.playerPosX = this.posX
        game.playerPosY = this.posY*/
        return true
    }
}

// TO DELETE IF NOT USED : module.exports = Pokeball