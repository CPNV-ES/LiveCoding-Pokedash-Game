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
function nextLevel() {
    return Engine::send('nextLevel');
}
/**
 * Return true
 */
function openDoor(): bool {
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
 * Return the number of pokeball in the current game
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
