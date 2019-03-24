Documentation in progress
# Functions for user
## Resume
List of functions :

### Map positions and limit
- [getMapSizeX()](#getmapsizex)
- [getMapSizeY()](#getmapsizey)
- [getPosX()](#getposx)
- [getPosY()](#getposy)
- [isInMap(posX, posY, mapSizeX, mapSizeY, direction, distance)](#isinmap)

### Movement
- [waitUntilKeyPressed()](#waituntilkeypressed)
- [getElement(direction, distance)](#getelement)
- [swapSprite(direction, distanceFrom, distanceTo)](#swapsprite)

### Objectives
- [getObjectives()](#getobjectives)
- [takeObjective()](#takeobjective)

### Door
- [isDoorOpen()](#isdooropen)
- [openDoor()](#opendoor)
- [closeDoor()](#closedoor)

### Level
- [nextLevel()](#nextlevel)
- [loadLevel(level)](#loadlevel)
- [getCurrentLevelName()](#getcurrentlevelname)
- [getCurrentLevelIndex()](#getcurrentlevelindex)
- [getLevelName(level)](#getlevelname)


### Console
- [writeConsole(value)](#writeconsole)

### Music
- [getCurrentMusicIndex()](#getcurrentmusicindex)
- [getCurrentMusicName()](#getcurrentmusicname)
- [getMusicIndex(musicName)](#getmusicindex)
- [getMusicName(musicIndex)](#getmusicname)
- [playMusicIndex(musicIndex)](#playMusicIndex)
- [playMusicNamed(musicName)](#playmusicnamed)



### List of [elements](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blop/master/instructions/elements.md)
- 'Protagonist'
- 'Road'
- 'Boulder'
- 'Objective'
- 'Door'
- 'Tree'

# Map positions and limits
## getMapSizeX()
### Description
Return the number of columns of the map (map size X).

### Examples
#### Php
```php
$limX = getMapSizeX();
```

#### Ruby
```ruby
lim_x = get_map_size_x
```

## getMapSizeY()
### Description
Return the number of rows of the map (map size Y).

### Examples
#### Php
```php
$limY = getMapSizeY();
```

#### Ruby
```ruby
lim_y = get_map_size_y
```
## getPosX()
### Description
Return the current X position of the protagonist.

### Examples
#### Php
```php
$posX = getPosX();
```

#### Ruby
```ruby
pos_x = get_pos_x 
```
## getPosY()
### Description
Return the current Y position of the protagonist.

### Examples
#### Php
```php
$posY = getPosY();
```

#### Ruby
```ruby
pos_y = get_pos_y 
```
## <a name="isinmap"></a>isInMap(posX, posY, mapSizeX, mapSizeY, direction, distance)
### Description
Check if an action will perform inside the map array from a specific position to a specific direction and distance.

### Arguments
* posX : int
* posY : int
* mapSizeX : int
* direction : int
* distance : int

### Specification
The boolean is returned as a string. You have to specify the full string in the condition which will be 'true' or 'false'.
### Examples
Check if the next move from the protagonist will occur in the map.
#### Php
```php
$dir = 37 // Represent left arrow key

if(isInMap(getPosX(), getPosY(), getMapSizeX(), getMapSizeY(), $dir, 1) == 'true'){
    writeConsole('I am in the map');
}
```

#### Ruby
```ruby
dir = 37 # Represent left arrow key

if is_in_map(get_pos_x, get_pos_y, get_map_size_x, get_map_size_y, dir, 1) == 'true'
    write_console('I am in the map')
end
```

# Movement
## waitUntilKeyPressed()
Check the [Key Events Instructions](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blop/master/instructions/keyEvents.md)
 for a better description of the arrow keys.
### Description
Wait until you press a key. The key pressed return a string keyCode, representing a number of the key pressed. **Don't forget to convert to int !**

Example:
- Left Arrow  -> 37
- Up Arrow    -> 38
- Right Arrow -> 39 
- Down Arrow  -> 40

### Examples
Get the direction if you pressed some arrow keys.
#### Php
```php
$dir = (int)waitUntilKeyPressed(); // the processus will wait until you press a key...

if ($dir == 37) writeConsole('I have pressed the left arrow key !');
```
#### Ruby
```ruby
dir = wait_until_key_pressed.to_i # the processus will wait until you press a key...

if dir == 37
    write_console('I have pressed the left arrow key !')
end
```

## <a name="getelement"></a>getElement(direction, distance)
### Description
Return a string of an element from the protagonist.

Here is a list of all the different element getElement() can returns :
- 'Protagonist'
- 'Road'
- 'Boulder'
- 'Objective'
- 'Door'
- 'Tree'

You can also check a more detailed **[description](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blop/master/instructions/elements.md)**.

### Arguments
* direction: int
    
    int :   best option is to send the keyCode of the arrow key

    > Indicate in which direction you want to get the element.

* distance : int    

    > The number of case from Pikachu you will target (only >=0).

### Examples
Case: if **0** is the protagonist and the others numbers are elements :

|   |   |   |
| - | - | - |
| 2 | 1 | 3 |
| 1 | __0__ | 1 |
| 2 | 3 | 2 |
| 3 | 2 | 1 |


Get the element next to the protagonist with the direction of the arrow key :
#### Php
```php
$dir = (int)waitUntilKeyPressed();
// Waiting for the user to press a key...
// ... I press 'down arrow' (40) !
$element = getElement($dir, 2); 
// => $element = '2' (from the schema above)
```
 
#### Ruby
```ruby
dir = wait_until_key_pressed.to_i
# Waiting for the user to press a key...
# ... I press 'up arrow' (38) !
element = get_element(dir, 1)
# => element = '1' (from the schema above)
```

## <a name="swapsprite"></a>swapSprite(direction, distanceFrom, distanceTo)
### Description
The swapSprite function intervert two elements (or sprite) in the current map.

### Arguments
* **direction**: int  
    - int :   best option is to send the keyCode (37, 38, 39, 40 or use the method waitUntilKeyPressed()).


    > Indicate in which direction you want to get the element.

* **distanceFrom** : int

    > Indicate from the protagonist which starting element you want to swap (>=0).

* **distanceTo** : int

    > Indicate from the protagonist the other element to swap. The argument **distanceTo must always be higher than distanceFrom**.
    
### Examples 
Swap sprite Pikachu and Road :

_If **0** is the protagonist (Pikachu) and 1 the road:_

Before:
|   |   |
| - | - |
| __0__ | 1 |

#### Php
```php
$dir = 37; // Right direction
$element = getElement($dir, 1);
if ($element == 'Road'){
    swapSprite($dir, 0, 1);
}
```
#### Ruby
```ruby
dir = 37 # Right direction
element = getElement(dir, 1)
if element == 'Road'
    swap_sprite(dir, 0, 1)
end
```

After:
|   |   |
| - | - |
| 1 | __0__ |


# Objective 
## getObjectives() 
### Description
Return all the objectives left in the map.

### Examples
#### Php 
```php
$objectiveLeft = getObjectives();
writeConsole($objectiveLeft); // Will print '5' if 5 objectives left
```
If no objectives left :
```php
if (getObjectives() == 0) {
    echo('There is no objectif left !');
}
```
#### Ruby
```ruby
objective_left = get_objectives
write_console(objective_left) # Will print '5' if 5 objectives left
```
If no objectives left :
```ruby
if get_objectives == 0 
    write_console('There is no objectif left !')
end
```

## takeObjective() 
### Description 
**Only working with the method getElement() !** 
Take an objective on the map and replace it by a road. Decrement the getObjectives() method by 1.

### Example
#### Php
```php
$element = getElement(39, 1); // Get the element on the right of the protagonist

// If the element we got is an objective
if ($element == 'Objective'){
    takeObjective(); // We take the objective and replace it by a road
    swapSprite(39, 1); // We move on the road (was objective before)
}
```
#### Ruby
```ruby
# Get the element on the right of the protagonist
element = get_element(39, 1)

# If the element we got is an objective
if element == 'Objective'
    take_objective # We take the objective and replace it by a road
    swap_sprite(39, 1) # We move on the road (was objective before)
end
```
# Door
## isDoorOpen()
### Description
Return boolean if the door is open or not.

### Example
#### Php
```php
if (isDoorOpen()){
    writeConsole('The Door is Open. You can access next level');
}
```
#### Ruby
```ruby
if is_door_open
    write_console('The door is open. You can access next level.')
end
```
## openDoor() 
### Description
Open the door and change the sprite from a closed door to an opened door. Warning: to open the door, you need to check if you got all the objectives !

### Example
If we have all the objectives, we can open the door :
#### Php
```php
if (getObjectives() == 0) {
    openDoor();
}
```
#### Ruby
```ruby
if get_objectives == 0
    open_door
end
```
## closeDoor()
### Description
Function to close the door and change the sprite from an opened door to a closed door.

### Example
Count how many times we hit keyPressed() and close the door if it's >100 :
#### Php
```php
if($countMovement > 100){
    closeDoor();
}
```
#### Ruby
```ruby
if count_movement > 100
    close_door
end
```

# Level
## nextLevel()
### Description
Load the next level when you call this function. You need to get all the objectives to use this method. Else a warning will occur in the console.

### Example
Go to next level :
#### Php
```php
if(isDoorOpen()){
    nextLevel();
}
```

#### Ruby
```ruby
if is_door_open
    next_level
end
```

## <a name="loadlevel"></a>loadLevel(level)
### Description
Load the level given in argument. Goes from 0 to max level of the game.

### Argument
* level : int

### Example
Load the first level :
#### Php
```php
loadLevel(0);
```
#### Ruby
```ruby
load_level(0)
```

## getCurrentLevelName()
### Description
Get the current level name (string).
### Example
Get the current level name :
#### Php
```php
writeConsole(getCurrentLevelName());
// 'pokemonTutorial'
```
#### Ruby
```ruby
write_console(get_current_level_name)
# 'pokemonTutorial'
```

## getCurrentlevelIndex()
### Description
Get the current level (int).
### Example
Get the current level :
#### Php
```php
writeConsole(getCurrentLevelIndex());
// 0
```
#### Ruby
```ruby
write_console(get_current_level_index)
# 0
```

## <a name="getlevelname"></a>getLevelName(level)
### Description
Return the name of a level given in argument (int).

### Argument
* level : int
### Example
#### Php 
```php
writeConsole(getLevelName(1));
// 'pokemon1'
```

#### Ruby
```ruby
write_console(get_level_name(1))
# 'pokemon1'
```
# Console
## <a name="writeconsole"></a>writeConsole(value)
### description
Write a value in the debugger or console. 

### Argument
* value : all type

### Example
#### Php
```php
consoleWrite('Hello World !');
// Hello World !
```
#### Ruby
```ruby
console_write('Hello World !')
# Hello World !
```
# Music
Check the [Key Events ](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blop/master/instructions/keyEvents.md) disponible to use shortcuts for the music library.
## getCurrentMusicIndex()
### Description
Return the index of the current song (int).
### Example
#### Php
``` php
consoleWrite(getCurrentMusicIndex());
// 0
```
#### Ruby
```ruby
console_write(get_current_music_index)
# 0
```
## getCurrentMusicName()
### Description
Return the name of the current song (string).
### Example
#### Php
``` php
consoleWrite(getCurrentMusicName());
// 'pokemon.mp3'
```
#### Ruby
```ruby
console_write(get_current_music_name)
# 'pokemon.mp3'
```

## <a name="getmusicindex"></a>getMusicIndex(musicName)
### description
Return the index of the music given in argument. The index changes randomly at the preload time.

### Argument
* musicName : String

### Example
#### Php
```php
consoleWrite(getMusicIndex('lostWoods.mp3'));
// => 4
```

#### Ruby
```ruby
console_write(get_music_index('lostWoods.mp3'))
# => 4
```

## <a name="getmusicname"></a>getMusicName(musicIndex)
### description
Return the name of the music index given in argument.
### Argument
* musicIndex : int

### Example
#### Php
```php
consoleWrite(getMusicName(4);
// => 'lostWoods.mp3'
```

#### Ruby
```ruby
console_write(get_music_name(4))
# => 'lostWoods.mp3'
```

## <a name="playmusicindex"></a>playMusicIndex(musicIndex)
### Description
Play a song disponible in the library by his index.

### Argument
* musicIndex : int

### Example
#### Php
```php
playMusicIndex(4)
## => Will start playing 'lostWoods.mp3'
```

#### Ruby
```ruby
play_music_index(4)
# => Will start playing 'lostWoods.mp3'
```

## <a name="playmusicnamed"></a>playMusicNamed(musicName)
### Description
Play a song disponible in the library by his name.

### Argument
* musicName : String

### Example
#### Php
```php
playMusicNamed('lostWoods.mp3');
## => Will start playing 'lostWoods.mp3'
```

#### Ruby
```ruby
play_music_named('lostWoods.mp3')
# => Will start playing 'lostWoods.mp3'
```

