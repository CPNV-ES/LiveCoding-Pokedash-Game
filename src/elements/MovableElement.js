import { Element } from './Element'

export class MovableElement extends Element {

    constructor(game, x, y, img){
        super(game, x, y, img)
    }

    moveRight(){
        let temp = this.game.mapElement[this.posX+1][this.posY]
        this.game.mapElement[this.posX+1][this.posY] = this.game.mapElement[this.posX][this.posY]
        this.game.mapElement[this.posX][this.posY] = temp
        this.posX += 1
        this.x = this.x + this.game.blockWidth //For sprite drawing
        console.log(this.game.mapElement[this.posX-1][this.posY] )
        return true
    }

    moveLeft(){
        this.x = this.x - this.game.blockWidth //For sprite drawing
        let temp = this.game.mapElement[this.posX-1][this.posY]
        this.game.mapElement[this.posX-1][this.posY] = this.game.mapElement[this.posX][this.posY]
        this.game.mapElement[this.posX][this.posY] = temp
        this.posX -=1
        return true
    }
    
    moveDown(){
        this.y = this.y + this.game.blockHeight //For sprite drawing
        let temp = this.game.mapElement[this.posX][this.posY+1]
        this.game.mapElement[this.posX][this.posY+1] = this.game.mapElement[this.posX][this.posY]
        this.game.mapElement[this.posX][this.posY] = temp
        this.posY += 1
        return true
    }

    moveUp(){
        this.y = this.y - this.game.blockHeight //For sprite drawing
        let temp = this.game.mapElement[this.posX][this.posY-1]
        this.game.mapElement[this.posX][this.posY-1] = this.game.mapElement[this.posX][this.posY]
        this.game.mapElement[this.posX][this.posY] = temp
        this.posY -=1
        return true     
    }

    /*testMove(comingFrom){
        //Testing limit of the screen
        if(x < 0 || y < 0) return false
        if(x > this.game.WIDTH || y > this.game.HEIGHT) return false

        if(isStatic) return false
        if(isMovable) e.action(comingFrom)
    }*/

    // Function so the player can swap between two sprites

    // !!!!!! TO DO / TO TEST : maybe need to change also the x and y so the sprite can move !!!!
    /*swapSprite(direction, distanceFrom, distanceTo){
        let x = this.game.protagonist.posX
        let y = this.game.protagonist.posY        
        
        if (direction === 'right' || direction === RIGHT_ARROW){
            let temp = this.game.mapElement[x + distanceFrom][y]
            console.log(this.game.mapElement[x + distanceTo][y])
           // this.this.game.mapElement[x + distanceFrom][y].x = 
            this.game.mapElement[x + distanceFrom][y] = this.game.mapElement[x + distanceTo][y]
            this.game.mapElement[x + distanceFrom][y] = temp   
        }
        if (direction === 'left' || direction === LEFT_ARROW){
            let temp = this.game.mapElement[x - distanceFrom][y]
            this.game.mapElement[x - distanceFrom][y] = this.game.mapElement[x - distanceTo][y]
            this.game.mapElement[x - distanceFrom][y] = temp
        } 
        if (direction === 'down' || direction === DOWN_ARROW){
            let temp = this.game.mapElement[x][y + distanceFrom]
            this.game.mapElement[x][y + distanceFrom] = this.game.mapElement[x][y + distanceTo]
            this.game.mapElement[x][y + distanceFrom] = temp
        }
        if (direction === 'up' || direction === UP_ARROW){
            let temp = this.game.mapElement[x][y - distanceFrom]
            this.game.mapElement[x][y - distanceFrom] = this.game.mapElement[x][y - distanceTo]
            this.game.mapElement[x][y - distanceFrom] = temp
        }
        console.log("x: " + this.game.protagonist.posX, "y: " +this.game.protagonist.posY)
    }*/
}