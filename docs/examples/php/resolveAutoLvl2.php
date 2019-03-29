<?php
define('LIMX', getMapSizeX());
define('LIMY', getMapSizeY());
define('DIST', 1);

$dir = 37; // Start direction = left
$element = null;
$out = false;


while ($out == false) {
    // If next move is in the map
    if (isInMap(getPosX(), getPosY(), LIMX, LIMY, $dir, DIST) == 'true') {
        $element = getElement($dir, DIST);
        switch ($element) {
            case 'Road':
                swapSprite($dir, 0, DIST);
                break;
            case 'Objective':
                takeObjective();
                swapSprite($dir, 0, DIST);
                if (getObjectives() == 0) {
                    openDoor();
                }
                break;
            case 'Door':
                if (isDoorOpen()) {
                    nextLevel();
                    $out = true;
                }
                break;
            default:
                $dir += 1;
                if ($dir > 40) $dir = 37;
        }
    } 
    // If next move is out of the map, change direction
    else {
        $dir += 1;
        if ($dir > 40) $dir = 37;
    }
}
