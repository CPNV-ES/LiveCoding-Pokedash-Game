# Add new template
## Description
The template contains sprites of all the elements of a level. Follow this tutorial if you want to add new sprites to a level.

For example, the map level `src/maps/pokemonTutorial.js` has the property `template` set to `pokemon` :
```javascript
export default {
    // TUTORIAL LEVEL (POKEMON)

    name: 'pokemonTutorial',
    template: 'pokemon', // The template will
```

You can check the pokemon template in : `assets/pokemon/`. Each file inside represents an element img:
- boulderImg.png  -> sprite of ronflex
- doorImg.png -> sprite of the door closed
- objectiveImg.png -> sprite of pokeball 
- openDoorImg.png -> sprite of the door opened
- protagonistImg.png -> sprite of pikachu
- treeImg.png -> sprite of a tree


As you can see, the map pokemonTutorial conatins each of these elements :
```javascript
e: {
    0: Protagonist, //There can be only one protagonist in the pattern
    1: Objective,
    2: Door, //There can be only one Door actually
    3: Boulder,
    4: Tree,
    9: Road
}
```

## Procedure
## 1. Create a personnal template (megaman)
`# mkdir assets/megaman/`

## 2. Download the sprite
Download and store the sprite in `assets/megaman`. You have to call them with the class element + Img.png:
- boulderImg.png -> the sprite of a megaman boulder
- protagonist.png -> sprite of Megaman character
- etc.

## 3. Add the template in map
Go in `src/maps`, select a map and change set the template to `template: 'megaman'`

## 4. It's done !
The maps with the template set to 'megaman' will now show the megaman templates sprite !
