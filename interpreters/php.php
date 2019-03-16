<?php
function myEngine ($method, $params){
    $response = Engine::send(
        json_encode([
            "action" => $method,
            "params" => $params
        ])
    );
    return $response;
}

function swapSprite ($dir, $from, $to) {
    return myEngine('swapSprite', [$dir, $from, $to]);
   /* $response = Engine::send(
        json_encode([
            "action" => "swapSprite",
            "params" => [$dir, $from, $to]
        ])
    );
    return $response;*/
}

/**
 * Return the name of the element
 */
function getElement($direction, int $distance) {
    if (!is_int($distance) && $distance > 0) throw new Exception('distance only accepts int > 0');
    return myEngine('getElement', [$direction, $distance]);
}


/**
 * Return true
 */
function loadLevel($level){
    if(!is_int($level)) throw new Exception('Level must be an int !');
    return myEngine('loadLevel', $level);
}

/**
 * Return true
 */
function nextLevel() {
    return Engine::send('nextLevel');
}

function getXMapSize(){
    return Engine::Send('getXMapSize');
}

function getYMapSize(){
    return Engine::Send('getYMapSize');
}

function getPosX(){
    return Engine::Send('getPosX');
}

function getPosY(){
    return Engine::Send('getPosY');
}

/**
 * Return true
 */
function openDoor() {
    return Engine::send('openDoor');
}
/**
 * Return true when we close the door
 */
function closeDoor() {
    return Engine::send('closeDoor');
}
/**
 * Return true if the door is open or false it's closed
 */
function isDoorOpen() {
    return Engine::send('isDoorOpen');
}
/**
 * Return the number of objective in the current game
 */
function getObjectives() {
    return Engine::send('getObjectives()');
}
/**
 * Take objective in game, return true
 */
function takeObjective() {
    return Engine::send('takeObjective');
}

function waitUntilKeyPressed() {
    return Engine::send('waitUntilKeyPressed');
}

?>
