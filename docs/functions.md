Documentation in progress
# Functions for user

## Resume
List of functions :
- [keyPressed()](#keypressed)
- [getElement(direction, distance)](#getelement)
- [swapSprite(direction, distanceFrom, distanceTo)](#swapsprite)
- [getObjectives()](#getobjectives)
- [takeObjective()](#takeobjective)
- [isDoorOpen()](#isdooropen)
- [openDoor()](#opendoor)
- [closeDoor()](#closedoor)
- [nextLevel()](#nextlevel)

List of elements : 
- 'Protagonist'
- 'Road'
- 'Boulder'
- 'Pokeball'
- 'Door'
- 'Tree'

## keyPressed (keyCode)
### Description
The keyPressed() function is called once every time a key is pressed. I keyCode for the key that was pressed is stored in the keyCode variable. 

### Usage
    keyPressed();

### Examples
```php
$countMovement = 0;
if(keyPressed()){
    $keyCode = keyPressed();
    $debug->log($keyCode); // Show the key pressed in log  
    $countMovement += 1;  
}
```

## getElement (direction, distance)
### Description
Return a string of an element from the protagonist.

Here is a list of all the different element getElement() can returns :
- 'Protagonist'
- 'Road'
- 'Boulder'
- 'Pokeball'
- 'Door'
- 'Tree'


### Arguments
* direction: int or specific string
    
    int :   best option is to send the keyCode

    string : 'left', 'right', 'up', 'down'

    > Indicate in which direction you want to get the element

* distance : int    

    > The number of case from Pikachu you will target (Only >=0)
### Usage
    getElement(keyCode, 1);

### Examples
Case: if **0** is the protagonist and the others numbers are elements :

|   |   |   |
| - | - | - |
| 2 | 1 | 3 |
| 1 | __0__ | 1 |
| 2 | 3 | 2 |
| 3 | 2 | 1 |

#### Php

Get an element 2 case below the protagonist 
```php
$element = getElement('down', 2); // or getElement(keyCode, 2)
// => $element = '2'
```
Get the protagonist 
```php
$element = getElement(keyCode, 0); // or getElement(keyCode, 2)
// => $element = 0 (the protagonist)
```
## swapSprite (direction, distanceFrom, distanceTo)
### Description
The swapSprite function intervert two elements (or sprite) in the current map and will display them in the game. 

### Arguments
* **direction**: int or specific string
    
    - int :   best option is to send the keyCode

    - string : 'left', 'right', 'up', 'down'

    > Indicate in which direction you want to get the element

* **distanceFrom** : int

    > Indicate from the protagonist which starting element you want to swap (>=0)

* **distanceTo** : int

    > Indicate from the protagonist the other element to swap. The argument **distanceTo must always be higher than distanceFrom**.
    
### Usage
    swapSprite(0, 1);

### Examples 

#### php
Swap sprite Pikachu and Road 

_If **0** is the protagonist (Pikachu) and 1 the road:_

|   |   |
| - | - |
| __0__ | 1 |

```php
$element = getElement($keyCode, 1);
if ($element == 'Road'){
    swapSprite($keyCode, 0, 1);
}
```
|   |   |
| - | - |
| 1 | __0__ |



## getObjectives () 
### Description
When the game is initialised, there is a variable counting all the objectives. The getObjectives() function return all those objectives in a numerical string.

### Usage
    getObjectives()


### Examples
#### Php 
Store objectives in a variable : 
```php
$pokeballLeft = getObjectives();
echo($pokeballLeft); // Will return '5' if 5 objectives left
```
If no objectives left
```php
if(getObjectives() == 0) {
    echo('There is no objectif left !');
}
```

## takeObjective () 
### Description 
The takeObjective() function decrement one objectif for all the actual objectives. It can't goes lower than 0. 

### Usage

### Example
#### Php
```php
$pokeballLeft = getObjectives();
// pokeballLeft = 5
takeObjective();
// pokeballLeft = 4
```

## isDoorOpen ()
### Description
Return boolean if the door is open or not.
### Usage
    isDoorOpen();

### Example
#### Php
```php
if (isDoorOpen()){
    echo('The Door is Open. You can access next level');
}
```

## openDoor () 
### Description
Function to open the door and switch the sprite from a closeed door to an opened door. Warning: to open the door, you need to check if you got all the objectives !
### Usage
    openDoor();
### Example
#### Php
If we have all the objectives, we can open the door:
```php
    if (getObjectives() == 0) {
        openDoor();
    }
```

## closeDoor ()
### Description
Function to close the door and switch the sprite from an opened door to a closed door
### Usage
    closeDoor();
### Example
#### Php
Count how many times we hit keyPressed() and close the door if it's >100
```php
    if($countMovement >= 100){
        closeDoor();
    }
```

## nextLevel ()
### Description
Load the next level when you call this function
### Usage
    nextLevel();
### Example
#### Php
Go to next level
```php
if(isDoorOpen()){
    nextLevel();
}
```
