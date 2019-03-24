<?php
// Script to test write_console and if all functions works

$d = 37; // Left Key

writeConsole("swapSprite : ".swapSprite($d, 0, 1));
writeConsole("getElement : ".getElement($d, 1));
writeConsole("isInMap : ".isInMap(getPosX(), getPosY(), getMapSizeX(), getMapSizeY(), $d, 1));
writeConsole("writeConsole : ".writeConsole(1));
writeConsole("loadLevel : ".loadLevel(1));
writeConsole("nextLevel : ".nextLevel());
writeConsole("getMapSizeX : ".getMapSizeX());
writeConsole("getMapSizeY : ".getMapSizeY());
writeConsole("getPosX : ".getPosX());
writeConsole("getPosY : ".getPosY());
writeConsole("openDoor : ".openDoor());
writeConsole("closeDoor : ".closeDoor());
writeConsole("isDoorOpen : ".isDoorOpen());
writeConsole("getObjectives : ".getObjectives());
writeConsole("takeObjective : ".takeObjective());
writeConsole("getCurrentLevelName : ".getCurrentLevelName());
writeConsole("getLevelName : ".getLevelName(1));
writeConsole("getMusicIndex : ".getMusicIndex('pokemon.mp3'));
writeConsole("getCurrentMusicName : ".getCurrentMusicName());
writeConsole("getCurrentMusicIndex : ".getCurrentMusicIndex());
writeConsole("getMusicName : ".getMusicName(0));
writeConsole("playMusicNamed : ".playMusicNamed('ss'));
writeConsole("playMusicIndex : ".playMusicIndex(3));
writeConsole(waitUntilKeyPressed());