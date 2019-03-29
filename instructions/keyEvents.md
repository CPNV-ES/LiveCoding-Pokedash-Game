# Key Events
While playing Pokedash Game, there are a lots of key events to give a better game experience.

## Keys Arrow
To handle with each keys, and specifically the arrow keys (to get a direction). You have to call the method `waitUntilKeyPressed()`, then the program will wait until you press a key to get his keyCode.

This method will return a stringified response. Don't forget to change the type of the response to an int type :
### Php
```php
$keyCode = (int)waitUntilKeyPressed();
```
### Ruby
```ruby
key_code = wait_until_key_pressed.to_i
```
Here's a list of the arrows key Code

* Left Arrow : 37
* Up Arrow : 38
* Right Arrow : 39
* Down Arrow : 40


## Build-In key events functionnalities
There are some shortcut available for a better in-game experience. You can just press those keys to directly get an effect :

### Restart the current level ('R')
`shift+r`

This event reload the map and the positions (if you are blocked a level for example).

### Play On/Off the music ('M')
`shift + m`

The music is muted when you start the game. When the game is loaded, press M (shift + m) to play or pause the music.

### Next Music ('N')
`shift + n`

### Last Music ('B')
`shift+b`

### Increase Volume ('+')
`+` to increase the volume

### Lower Volume ('-')
`-` to lower the volume

# Debug Mode
In production, there are some keyEvents desactived. However, you can use them if you active the debugMode. Go in the console of your web navigator :

Activate debugMode: `game.debugMode = true`

Desactivate debugMode :`game.debugMode = false`

You now have access to the functionnality below :

- Press keys from 0 to max levels to load the specific level.
- Having a playable game with arrow keys (local, no delay with backend).
