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
    return myEngine('nextLevel', null);
}

function getXMapSize(){
    return myEngine('getXMapSize', null);
}

function getYMapSize(){
    return myEngine('getYMapSize', null);
}

function getPosX(){
    return myEngine('getPosX', null);
}

function getPosY(){
    return myEngine('getPosY', null);
}

/**
 * Return true
 */
function openDoor() {
    return myEngine('openDoor', null);
}
/**
 * Return true when we close the door
 */
function closeDoor() {
    return myEngine('closeDoor', null);
}
/**
 * Return true if the door is open or false it's closed
 */
function isDoorOpen() {
    return myEngine('isDoorOpen', null);
}
/**
 * Return the number of objective in the current game
 */
function getObjectives() {
    return myEngine('getObjectives', null);


}
/**
 * Take objective in game, return true
 */
function takeObjective() {
    return myEngine('takeObjective', null);
}

function getCurrentLevelName(){
    return myEngine('getCurrentLevelName', null);
}

function getLevelName($level){
    return myEngine('getLevelName', $level);
}

function getCurrentMusic(){
    return myEngine('getCurrentMusic', null);
}

function getMusicIndex(){
    return myEngine('getMusicIndex', null);
}

function setMusic($musicName){
    return myEngine('setMusic', $musicName);
}

function waitUntilKeyPressed() {
    return myEngine('waitUntilKeyPressed', null);
}

?>
