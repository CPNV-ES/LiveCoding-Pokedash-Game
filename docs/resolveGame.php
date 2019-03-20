<?php

while(true){
    $x = getPosX();
    $y = getPosY();
    $limX = getXMapSize();
    $limY = getYMapSize();
    $dir = (int)waitUntilKeyPressed();
    $dist = 1; //distance to check from the protagonist

    
    $objectiveLeft = (int)getObjectives();
    if(isInMap($x, $y, $limX, $limY, $dir, $dist) == 'true'){ //isInMap($x, $y, $limX, $limY, $dir, 1)
        $element = getElement($dir, $dist);
        switch($element){
            case 'Road':
                swapSprite($dir, 0, $dist);
            break;
            
            case 'Boulder':
                if(isInMap($x, $y, $limX, $limY, $dir, $dist+1) == 'true'){
                    if (getElement($dir, $dist + 1) != "Road") break;
                    swapSprite($dir, $dist, $dist + 1);
                    swapSprite($dir, 0, $dist);
                }
                break;

            case 'Objective':
                takeObjective();
                swapSprite($dir, 0, $dist);
                $objectiveLeft -= 1;
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
    }
}

