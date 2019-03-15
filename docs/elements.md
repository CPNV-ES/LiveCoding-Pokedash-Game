# Elements
The function getElement(direction, distance) will return a string of one of those elements. You will have to handle each element differently. Here is a description of each element (there are 6 elements) and what are their constraints.

## 1. Protagonist
> getElement() -> return 'Protagonist'
### Description
This is the main actor of the game. Lots of functions will be centered around the protagonist.

### Functions associated
- swapSprite(direction, distanceFrom, distanceTo)
- getElement(direction, distance)

When there is **distance** or **direction** in the arguments, it will start from the protagonist.

## 2. Road
> getElemet() -> return 'Road'
### Description
Road is an element where the protagonist can freely move on it, with no constraints (except the fact he'll be out of the map).

## 3. Tree
> getElement() -> return 'Tree'
### Description
Tree is a blocking element. You can move or do any action on it.

## 4. Pokeball
> getElement() -> return 'Pokeball'
### Description
Pokeball is an objective element. When you walk on it, you have to take it and say in your logic that you have taken one objective
### Functions associated
- getObjectives()
- takeObjective()

## 5. Boulder
> getElement() -> return 'Boulder'

### Description
Boulder is a movable element. You can push it but only if there is a Road behind. For example, you can't push a boulder if there is another boulder behind, or pokeball, or tree etc.

## 6. Door
### Description
Door is a transition element. The door is either closed or opened.

In the game, you will have to take all objectives to open the door. If you walk on an open door, you can access next level.

### Functions associated
- isDoorOpen()
- doorClose()
- doorOpen()
- nextLevel()
