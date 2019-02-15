export class Element{
    constructor(game, x, y, img){
        this.game = game // game injected from the game class
        this.x = x
        this.y = y
        this.img = img
        this.posX = this.x / this.game.blockHeight
        this.posY = this.y / this.game.blockWidth
    }
    
    // Move a sprite to a distance
    moveSprite(direction, distance){
        if (direction === 'left' || direction === LEFT_ARROW){
            this.x -= this.game.blockWidth * distance
        }

        if (direction === 'right' || direction === RIGHT_ARROW){
            this.x += this.game.blockWidth * distance
        }

        if (direction === 'up' || direction === UP_ARROW){
            this.y -= this.game.blockHeight * distance
        }

        if (direction === 'down' || direction === DOWN_ARROW){
            this.y += this.game.blockHeight * distance
        }
        redraw()
    }

    show(){
        this.game.sketch.image(this.img, this.x, this.y)
    }

   /* static loadSprite(){
        return loadImage(`assets/${this.constructor.name.toLowerCase()}.jpg`)
    }*/
}

// TO DELETE IF NOT USED : module.exports = Element