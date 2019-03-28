# Add new method
## Description
You can add new methods for you or the user.

As an example, we will create a new method for the user to load a specific Level, and translate it in php and ruby.

This method will let the user load manually a level with the index of the level wanted in parameter 

## Procedure
## 1. Create your new method in `src/Game.js`:
```javascript

//Load a specific level
loadLevel(level) {
    // If the levels exists in the levels array, load it
    if (level >= 0 && level < this.levels.length) {
        this.level = level
        this.mapName = this.levels[this.level]

        // Set the settings of the new map
        // Check the Background
        if (this.mapName.background != '' && (typeof this.mapName.background === 'string')) {
            this.background = this.mapName.background
        }
        else this.background = this.DEFAULTBGCOLOR

        // Check the music
        if (this.mapName.music != '' && typeof this.mapName.music === 'string') this.playMusicNamed(this.mapName.music)


        // Launch config to reload the loaded level map
        this.objectives = 0 // Reset the objectives of the game to 0
        this.preload(this.mapName)
        this.setup()
        return true
    }
    else {
        this.console.error("This level doesn't exist")
        return false
    }
}
```
> You can test it in the game in your navigator console by writing : Game.loadlevel(1)

## 2. Translate in interpretors:
### Ruby (`interpreters/ruby.rb`)
```ruby
def load_level(level)
    return my_engine('loadLevel', level)
end
```

### Python (`interpreters/php.php`)
```php
function loadLevel(int $level){
    return myEngine('loadLevel', $level);
}
```

#### If the function had no parameters:
ruby
```ruby
def load_level(level)
    return my_engine('loadLevel', nil)
end
```

php
```php
function loadLevel(int $level){
    return myEngine('loadLevel', null);
}
```

## 3. Add the method in the executeGameCommand(command)
This method is in Game.js (end of file). It execute php or ruby functions got in response from the server to execute them to the client side.

Just add in the switch(command.action){} your method :
```javascript
async executeGameCommand(command) {
        // Execute the command in your game and return the result
        command = JSON.parse(command)

        switch (command.action) {
            case 'loadLevel':
                return this.loadLevel(command.params) // params: level (int)
            // All the others function below...
```

## 4. It's done ! 
Your method is now available ! Don't forget you can only send string to the server. If you want to send an object, you have to jsonify it first.
