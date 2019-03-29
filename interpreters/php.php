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
function getMapSizeX(){
    return myEngine('getMapSizeX', null);
}

function getMapSizeY(){
    return myEngine('getMapSizeY', null);
}

function getPosX(){
    return myEngine('getPosX', null);
}

function getPosY(){
    return myEngine('getPosY', null);
}

function isInMap(int $posX, int $posY, int $mapXSize, int $mapYSize, int $dir, int $distance){
    return myEngine('isInMap', [$posX, $posY, $mapXSize, $mapYSize, $dir, $distance]);
  
}

// MOVEMENT
function getElement(int $direction, int $distance) {
    if ($distance < 0) throw new Exception('distance only accepts int > 0');
    return myEngine('getElement', [$direction, $distance]);
}

function swapSprite (int $dir, int $from, int $to) {
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
function loadLevel(int $level){
    return myEngine('loadLevel', $level);
}

function nextLevel() {
    return myEngine('nextLevel', null);
}

function getCurrentLevelName(){
    return myEngine('getCurrentLevelName', null);
}

function getLevelName(int $level){
    return myEngine('getLevelName', $level);
}

function getCurrentLevelIndex(){
    return myEngine('getCurrentLevelIndex', null);
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

function getMusicIndex(String $musicName){
    return myEngine('getMusicIndex', $musicName);
}

function getMusicName(int $index){
    return myEngine('getMusicName', $index);
}

function playMusicNamed(String $musicName){
    return myEngine('playMusicNamed', $musicName);
}

function playMusicIndex(int $index){
    return myEngine('playMusicIndex', $index);
}
?>

