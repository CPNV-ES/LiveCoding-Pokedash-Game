<?php

function swapSprite ($dir, $from, $to) {
    $response = Engine::send(
        json_encode([
            "action" => "swapSprite",
            "params" => [$dir, $from, $to]
        ])
    );
    return $response;
}

?>
