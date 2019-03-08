<?php

function myEngine ($method, $param) {
    $toto = Engine::send(json_encode([
        "command" => $method,
        "params" => $param
        ]
    ));
    return json_decode($toto);
}

/**
 * Return the name of the element
 */
function getElement (string $direction = "right", int $distance) : string {
    return myEngine('getElement', [$direction, $distance]);
}

/**
 * Return true
 */
function swapSprite(string $direction = "right", int $distanceFrom, int $distanceTo) : bool {
    return myEngine('swapSprite', [$direction, $distanceFrom, $distanceTo]);
}

/**
 * Return true
 */
function nextLevel() : bool {
    return Engine::send('nextLevel');
}

/**
 * Return true
 */
function openDoor() : bool {
    return Engine::send('openDoor');
}

/**
 * Return true when we close the door
 */
function closeDoor() : bool {
    return Engine::send('closeDoor');
}

/**
 * Return true if the door is open or false it's closed
 */
function isDoorOpen() : bool {
    return Engine::send('isDoorOpen');
}

/**
 * Return the number of pokeball in the current game
 */
function getObjectives() : bool {
    return Engine::send('getObjectives()');
}

/**
 * Take objective in game, return true
 */
function takeObjective() : bool {
    return Engine::send('takeObjective');
}