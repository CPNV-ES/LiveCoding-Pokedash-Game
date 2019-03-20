<?php
/*
    Author : Julien Richoz
    Date: 20.03.2019
    
    Description: A php file solution to have a playable Pokedash Game with the arrows keys.
    
    Be careful of :
        - The functions from PokedashGame are send to a server, which return only string.
        - Don't forget to convert some response from string to the appropriate type (string to int for example).
        - Take care of boolean response ! If you need to check if it's true or false in a Pokedash function, stringify the boolean ! -> if($test == 'true')  
*/

// Get the size of the map
define('LIMX', getXMapSize());
define('LIMY', getYMapSize());
define('DIST', 1);


$startDirection = 37; // Start direction = left
$direction = checkFreeSide($startDirection, getPosX(), getPosY());
$objectiveLeft = getObjectives();

while(checkFreeSide($direction, getPosX(), getPosY()) >= 37 && checkFreeSide($startDirection, getPosX(), getPosY()) <= 40){
    $element = getElement($direction, DIST);
    switch($element){
        case 'Road':
            swapSprite($dir, 0, DIST);
        break;

        case 'Objective':
        takeObjective();
        swapSprite($dir, 0, DIST);
        $objectiveLeft -= 1;
        // Open the door is no objective left
        if($objectiveLeft == 0){
            openDoor();
        }
        break;

        case 'Door':
        if(isDoorOpen()){
            nextLevel();
        }
        break;
    }
    swapSprite($direction, 0, DIST);
}

function checkFreeSide($dir, $x, $y){
    for($i=0; $i>=3; $i++){
        if(isInMap($x, $y, LIMX, LIMY, $dir, DIST) == 'false') continue;
        
        $element = getElement($dir, DIST);
        if($element == 'Road' || $element == 'Objective' || $element == 'Door') return $dir;
        $dir ++;
        if($dir > 40) $dir = 37;
    }
    return false;
}
