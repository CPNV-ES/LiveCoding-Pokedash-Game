class MovableElement extends Element {
    constructor(x, y, img, isMovable){
        super(x, y, img, isMovable=true)
    }

    moveRight(){
        let temp = game.mapElement[this.posX+1][this.posY]
        game.mapElement[this.posX+1][this.posY] = game.mapElement[this.posX][this.posY]
        game.mapElement[this.posX][this.posY] = temp
        this.posX += 1
        this.x = this.x + game.blockWidth //For sprite drawing
        console.log(game.mapElement[this.posX-1][this.posY] )
        return true
    }

    moveLeft(){
        this.x = this.x - game.blockWidth //For sprite drawing
        let temp = game.mapElement[this.posX-1][this.posY]
        game.mapElement[this.posX-1][this.posY] = game.mapElement[this.posX][this.posY]
        game.mapElement[this.posX][this.posY] = temp
        this.posX -=1
        return true
    }
    
    moveDown(){
        this.y = this.y + game.blockHeight //For sprite drawing
        let temp = game.mapElement[this.posX][this.posY+1]
        game.mapElement[this.posX][this.posY+1] = game.mapElement[this.posX][this.posY]
        game.mapElement[this.posX][this.posY] = temp
        this.posY += 1
        return true
    }

    moveUp(){
        this.y = this.y - game.blockHeight //For sprite drawing
        let temp = game.mapElement[this.posX][this.posY-1]
        game.mapElement[this.posX][this.posY-1] = game.mapElement[this.posX][this.posY]
        game.mapElement[this.posX][this.posY] = temp
        this.posY -=1
        return true     
    }

    /*testMove(comingFrom){
        //Testing limit of the screen
        if(x < 0 || y < 0) return false
        if(x > game.WIDTH || y > game.HEIGHT) return false

        if(isStatic) return false
        if(isMovable) e.action(comingFrom)
    }*/

    // Function so the player can swap between two sprites

    // !!!!!! TO DO / TO TEST : maybe need to change also the x and y so the sprite can move !!!!
    swapSprite(direction, distanceFrom, distanceTo){
        let x = game.protagonist.posX
        let y = game.protagonist.posY        
        
        if (direction === 'right' || direction === RIGHT_ARROW){
            let temp = game.mapElement[x + distanceFrom][y]
            console.log(game.mapElement[x + distanceTo][y])
           // this.game.mapElement[x + distanceFrom][y].x = 
            game.mapElement[x + distanceFrom][y] = game.mapElement[x + distanceTo][y]
            game.mapElement[x + distanceFrom][y] = temp   
        }
        if (direction === 'left' || direction === LEFT_ARROW){
            let temp = game.mapElement[x - distanceFrom][y]
            game.mapElement[x - distanceFrom][y] = game.mapElement[x - distanceTo][y]
            game.mapElement[x - distanceFrom][y] = temp
        } 
        if (direction === 'down' || direction === DOWN_ARROW){
            let temp = game.mapElement[x][y + distanceFrom]
            game.mapElement[x][y + distanceFrom] = game.mapElement[x][y + distanceTo]
            game.mapElement[x][y + distanceFrom] = temp
        }
        if (direction === 'up' || direction === UP_ARROW){
            let temp = game.mapElement[x][y - distanceFrom]
            game.mapElement[x][y - distanceFrom] = game.mapElement[x][y - distanceTo]
            game.mapElement[x][y - distanceFrom] = temp
        }
        console.log("x: " + game.protagonist.posX, "y: " +game.protagonist.posY)
    }
}