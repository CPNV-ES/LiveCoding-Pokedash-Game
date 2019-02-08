class Element{
    constructor(x, y, img, isMovable){
        this.x = x
        this.y = y
        this.img = img
        this.isMovable = Boolean
        this.posX = this.x / game.blockHeight
        this.posY = this.y / game.blockWidth
    }
    
    // Move a sprite to a distance
    moveSprite(direction, distance){
        if (direction === 'left' || direction === LEFT_ARROW){
            this.x -= game.blockWidth * distance
        }

        if (direction === 'right' || direction === RIGHT_ARROW){
            this.x += game.blockWidth * distance
        }

        if (direction === 'up' || direction === UP_ARROW){
            this.y -= game.blockHeight * distance
        }

        if (direction === 'down' || direction === DOWN_ARROW){
            this.y += game.blockHeight * distance
        }
        redraw()
    }

    show(){
        image(this.img, this.x, this.y)
    }

   /* static loadSprite(){
        return loadImage(`assets/${this.constructor.name.toLowerCase()}.jpg`)
    }*/
}

// TO DELETE IF NOT USED : module.exports = Element