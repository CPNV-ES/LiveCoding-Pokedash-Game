class Protagonist extends MovableElement{
    constructor(x, y, img){
        super(x, y, img)
        this.isProtagonist = true
        this.pokeball = 0
    }
    
    //static LIFE = 3 
    /*moveLeft(){
        console.log("Protagonist move left")
        console.log(game.blockWidth);
        this.x = this.x - game.blockWidth;
        return true;
    }*/

    action(information){
        console.log("bienvenue dans la méthode action de la classe Protagonist")
        return true
    }
}
