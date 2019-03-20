<?php
// IN PROGRESS
while(true){
    $x = getPosX();
    $y = getPosY();
    $limX = getXMapSize();
    $limY = getYMapSize();
    $dir = (int)waitUntilKeyPressed();

    $element = getElement($dir, 1);
    $element=str_replace("\n","", $element);
    $objectiveLeft = (int)getObjectives();
    switch($element){
            case 'Road':
            swapSprite($dir, 0, 2);
            break;
        case 'Boulder':
            if (str_replace("\n", "", getElement($dir, 2)) != "Road") break;
            swapSprite($dir, 1, 2);
            swapSprite($dir, 0, 1);
            break;
        case 'Objective':
            takeObjective();
            swapSprite($dir, 0, 1);
            $objectiveLeft -= 1;
            if($objectiveLeft == 0){
                openDoor();
            }
            break;

        case 'Door':
            if(isDoorOpen()) nextLevel();
            break;
    }
}




/*for($i = 0; $i<=3; $i++){
    swapSprite('up', 0, 1);
}*/


