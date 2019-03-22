<?php
define('LIMX', (int)getXMapSize());
define('LIMY', (int)getYMapSize());
define('DIST', 1);
$dir = 37; // Start direction = left
$element = null;
$objectiveLeft = (int)getObjectives();
$out = false;
while ($out == false) {
    if (isInMap((int)getPosX(), (int)getPosY(), LIMX, LIMY, $dir, DIST) == 'true') {
        $element = getElement($dir, DIST);
        switch ($element) {
            case 'Road':
                swapSprite($dir, 0, DIST);
                break;
            case 'Objective':
                takeObjective();
                swapSprite($dir, 0, DIST);
                $objectiveLeft -= 1;
                if ($objectiveLeft == 0) {
                    //openDoor();
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
    } else {
        $dir += 1;
        if ($dir > 40) $dir = 37;
    }
}

