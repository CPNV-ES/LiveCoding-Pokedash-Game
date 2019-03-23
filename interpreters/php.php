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

// MAP POSITIONS AND LIMIT
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

function isInMap($posX, $posY, $mapXSize, $mapYSize, $dir, $distance){
    return myEngine('isInMap', [$posX, $posY, $mapXSize, $mapYSize, $dir, $distance]);
}

// MOVEMENT
function getElement($direction, int $distance) {
    if (!is_int($distance) && $distance > 0) throw new Exception('distance only accepts int > 0');
    return myEngine('getElement', [$direction, $distance]);
}

function swapSprite ($dir, $from, $to) {
    return myEngine('swapSprite', [$dir, $from, $to]);
}

function waitUntilKeyPressed() {
    return myEngine('waitUntilKeyPressed', null);
}


// OBJECTIVES
function takeObjective() {
    return myEngine('takeObjective', null);
}

function getObjectives() {
    return myEngine('getObjectives', null);
}

// DOOR
function openDoor() {
    return myEngine('openDoor', null);
}

function closeDoor() {
    return myEngine('closeDoor', null);
}

function isDoorOpen() {
    return myEngine('isDoorOpen', null);
}

// LEVEL
function loadLevel($level){
    if(!is_int($level)) throw new Exception('Level must be an int !');
    return myEngine('loadLevel', $level);
}

function nextLevel() {
    return myEngine('nextLevel', null);
}

function getCurrentLevelName(){
    return myEngine('getCurrentLevelName', null);
}

function getLevelName($level){
    return myEngine('getLevelName', $level);
}


// CONSOLE
function writeConsole($value){
    return myEngine('writeConsole', $value);
}


// MUSIC
function getCurrentMusicName(){
    return myEngine('getCurrentMusicName', null);
}

function getCurrentMusicIndex(){
    return myEngine('getCurrentMusicIndex', null);
}

function getMusicIndex($musicName){
    return myEngine('getMusicIndex', $musicName);
}

function getMusicName($index){
    return myEngine('getMusicName', $index);
}

function playMusicNamed($musicName){
    return myEngine('playMusicNamed', $musicName);
}

function playMusicIndex($index){
    return myEngine('playMusicIndex', $index);
}
?>

