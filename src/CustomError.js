export class CustomError extends Error{
    constructor (message){
        super(message)

        this.constructor = CustomError
        this.__proto__ = CustomError.prototype
        this.message = message
    }
}

export class ElementOutOfMapError extends CustomError{
    constructor(message){
        super(message)
        this.message = "Can't get element out of map"
    }
}

export class SwapOutOfMapError extends CustomError{
    constructor(message){
        super(message)
        this.message = "Can't swap an element out of map"
    }
}
