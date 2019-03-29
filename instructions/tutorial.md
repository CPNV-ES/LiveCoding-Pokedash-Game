# Game's Objectives
The goal of the application is to code the logic of the game with the help of the arrow keys and the functions given.

To have an idea of a functionnable game with the arrow key, go in your web navigator console and type: `game.debugMode = true`.

## Game Hints
To move on the map, you have to swap the sprite with the element next to you. Use the function swapSprite(direction, distance) to move on the map. 

## Game's Goals
You can imagine and develop your own game logic. However, here is a list of precise exercises.
### Resolve game with the arrow keys :
- Use the arrow key to get an element next to you.
- Interact with the elements to perform a specific action.
    - Move the protagonist on the map (road).
    - Can't go out of the map
    - Can't go through trees
    - Can push boulders only if there is empty behind them (a road element)
    - Take objectives
    - Open door when no objectives left.
    - Go to the next level when you go through an open door

### Resolve game automatically :
- You can resolve the second level (pokemon1)  pretty easily with loops. Good luck !

# Tutorial
## 1. Use the arrow keys to perform all movement actions :
### Php
```php
while(true){
    $dir = (int)waitUntilKeyPressed();
    writeConsole($dir);
}
```

### Ruby
```ruby
while true do
    dir = wai_until_key_pressed.to_i
    write_console(dir)
end
```

## 2. Get elements next to you

Once you get a direction each you time press a key, you can then know the elements around you !)

### Php
```php
while(true){
    $dir = (int)waitUntilKeyPressed();
    writeConsole($dir);

    $writeConsole(getElement($dir, 1));
    
}

```
### Ruby
```ruby
while true do
    dir = wai_until_key_pressed.to_i
    write_console(get_element(dir, 1)
end
```

## 3. Interact with elements

Once you get a direction and an element, you can interact with it. Here is an example to move on the road or take an objective.

### Php
```php
while(true){
    $dir = (int)waitUntilKeyPressed();
    writeConsole($dir);
    $element = getElement($dir, 1);
    switch($element){
        // The element next to me is type 'Road'. I have to swap his sprite with mine to move.
        case 'Road':
            swapSprite($dir, 0, 1);
            break;
        // The element next to me is type 'Objective'. I have first to take the objective, then move on it.
        case 'Objective': 
            takeObjective();
            swapSprite($dir, 0, 1);
            break;
        default:
            break;
    }
   
}


```
### Ruby
```ruby
while true
    dir = wai_until_key_pressed.to_i
    element = get_element(dir, DIST)

    case element
    # Moving Pikachu 1 case
    when 'Road'
        swap_sprite(dir, 0, DIST)

    # Take the objective
    when 'Objective'
        take_objective
        swap_sprite(dir, 0, DIST)

    else 
        write_console('I do not handle this element')
    end
end
```

## 4. Check if you are in the map
Don't forget to check if the action you will perform occurs in the map (watchout to the stringified boolean !) :
### Php
```php
// Define map limits
DEFINE('LIM_X', getMapSizeX());
DEFINE('LIM_Y', getMapSieY());

# Infinite loop to handle arrow key event
while (true) {
    // Get the direction from the key pressed
    $dir = (int)waitUntilKeyPressed();

    // Get the current position of the protagonist
    $x = getPosX();
    $y = getPosY();
    
    // If the next action perform in map..
    if (isInMap(getPosX(), getPosY(), LIM_X, LIM_Y, $dir, 1) == 'true'){
        writeConsole("I am in the map !");
        writeConsole(getElement($dir, 1));
    }
}
```

### Ruby
```ruby
# Define map limits
LIM_X = get_map_size_x
LIM_Y = get_map_size_y

# Infinite loop to handle arrow key event
while true do
    # Get the direction from the key pressed
    dir = wait_until_key_pressed.to_i ## Don't forget to convert to int

    # Check if the action we are going to perform will happen in the map array
    if is_in_map(get_pos_x, get_pos_y, LIM_X, LIM_Y, dir, 1) == 'true' 
        write_console("I am in the map !")
        write_console(getElement($dir, 1))
    end
end
        
```

## 5. Finish the game
You now have all the structure to finish your game. Don't forget to check the [functions](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blob/master/instructions/functions.md) available to finish the game. Good luck !