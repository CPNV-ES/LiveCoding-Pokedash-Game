<?php
// Script to test write_console and if all functions works

$d = 37; // Left Key

writeConsole("swapSprite : ".swapSprite($d, 0, 1));
writeConsole("getElement : ".getElement($d, 1));
writeConsole("isInMap : ".isInMap(getPosX(), getPosY(), getXMapSize(), getYMapSize(), $d, 1));
writeConsole("writeConsole : ".writeConsole(1));
writeConsole("loadLevel : ".loadLevel(1));
writeConsole("nextLevel : ".nextLevel());
writeConsole("getXMapSize : ".getXMapSize());
writeConsole("getYMapSize : ".getYMapSize());
writeConsole("getPosX : ".getPosX());
writeConsole("getPosY : ".getPosY());
writeConsole("openDoor : ".openDoor());
writeConsole("closeDoor : ".closeDoor());
writeConsole("isDoorOpen : ".isDoorOpen());
writeConsole("getObjectives : ".getObjectives());
writeConsole("takeObjective : ".takeObjective());
writeConsole("getCurrentLevelName : ".getCurrentLevelName());
writeConsole("getLevelName : ".getLevelName(1));
writeConsole("getMusicIndex : ".getMusicIndex());
writeConsole("getCurrentMusic : ".getCurrentMusic());
writeConsole("setMusic : ".setMusic('davide.mp3'));
writeConsole(waitUntilKeyPressed());
