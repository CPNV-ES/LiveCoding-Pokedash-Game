class Road extends MovableElement{
    constructor(x, y, img){
        super(x, y, img)
    }
    action(information){
        let temp = game.mapElement[this.posX][this.posY]
        let tempX = this.posX
        let tempY = this.posY
        console.log(game.mapElement[this.posX][this.posY])
        game.mapElement[this.posX][this.posY] = game.mapElement[game.playerPosX][game.playerPosY]
        game.mapElement[game.playerPosX][game.playerPosY].moveSprite(information)
        game.mapElement[game.playerPosX][game.playerPosY] = temp
        this.posX = game.playerPosX
        this.posY = game.playerPosY
        game.playerPosX = tempX
        game.playerPosY = tempY
        
       

    }
}

// TO DELETE IF NOT USED : module.exports = Road