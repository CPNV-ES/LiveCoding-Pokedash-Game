# Game Structure
Pokemon-dash was develop in a dynamical way. It means you can easily add new elements or method to the game. Here is how it works :
## 1. Class Game
The Game class constructor of LiveCoding will give us 3 parameters to the Game class:

{element} : The dom element in which you will display the game. Contains the height and width of the box.
{assetsBasePath} : the base path to the assets directory of the game.
{console} (optionnal) : a module to use the LiveCoding console.

Here's a diagram of the Game class :

**INSERER DIAGRAM MACHIN DE Game**

In the Game constructor, we also handle the different levels which will be loaded during the p5.js execution, the musics, the p5 functions and some game logic variable.

The Game class also provide a method named executeGameCommand to execute the game commands sent by the processor. This method must accept a string (the command), and return the result in string format.

## 2. P5.js 
Once the class is instancied, we give the hand to p5.js which will create the game structure (set the canvas size, load the sprite according to the box size, load music etc.) through a preload, setup and draw processus.

Here is the order in which P5 works, and what we do in each of these steps:

### 2.1 preload(mapName)
#### Description
Called directly before setup(), the preload() function is used to handle asynchronous loading of external files in a blocking way. If a preload function is defined, setup() will wait until any load calls within have finished. Nothing besides load calls (loadImage, loadSound, loadJSON, loadFont, loadStrings, etc.) should be inside the preload function. If asynchronous loading is preferred, the load methods can instead be called in setup() or anywhere else with the use of a callback parameter. 

To make your own loading page, include an HTML element with id "p5_loading" in your page. More information [here](https://github.com/processing/p5.js/wiki/p5.js-overview#loading-screen).

#### In Pokedash :
In our configuration, the preload function has a 'mapName' parameters, so the game can load a whole new level with another elements and assets. In a certain way, it proves the dynamical strenght of the core application.

It will load the corresponding sprite of the level, and creating their asset attributes. 


### 2.2 setup()
#### Description
The setup() function is called once when the program starts. It's used to define initial environment properties such as screen size and background color.

#### In Pokedash :
The setup() function will create canvas, set dynamically the number of columns and rows of the game according to the map loeaded and set the size of each case.

Usually, setup need to be called only once. But we will call it after every new load map because we need to compute synchronously the size variables of the map.

Then, it will generate a 2D map array to stock each element through a personnal function called `iterateOverMap`. Here is how it works :

### 2.2.1 function iterateOverMap()
This function will create a 2D array. Each case will contains an instanciate element created through a factory class named `DynamicElement`.

We will then have a 2D structure full of elements (objects) ready to work with.

### 2.3 draw()
#### Description
Called directly after setup(), the draw() function continuously executes the lines of code contained inside its block until the program is stopped or noLoop() is called.

#### In Pokedash :
The draw run continously. We set the framerate to 30 to improve the performance on the processor. The draw function will draw the background and loop through the 2D array previously created to draw each element.

## 3. Elements
Each element is represented by his own class. They herit from a StaticElement or MovableElement class, which herits from the Element class. 

Each elements contains their position in pixel, their logic position (position in the 2D array), and their sprite. You can also add some specific method or variables in each class, like create a method to open a door.

**INSERER CLASS DIAGRAM OF ELEMENT**

To instanciate an element in the game, you just have to put it in a level pattern and the element will load automatically on the map. You can also instanciate manually an element in the game. 

In the original version of Pokedash-Game, there are 6 interactives elements. All those elements are explained [here](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blob/master/instructions/elements.md).

To add an element on your own, please refer to the documentation how to [addContent](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blob/master/docs/developer/addContent/).

## 4. Game and users functions
All the availables methods for the users are referenced [here](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blob/master/instructions/functions.md).

Lots of methods to code the logic of the game are also provided to the user (DRY). Like functions to test size map limits or get the position of the protagonist. Actually, a few methods are only used for the game, like refreshPos(). The most of the job of the developer is done in the p5.js flow, which was developed dynamically. It's then really easy to add your own content for the game.

However, you can also [add your owns methods](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blob/master/docs/addContent/method.md) to improve the game or to give to the user new goals for the game.

## 5. Interpretors
We need to translate the user's methods in the language availables. The `interpreters` folder contains all the methods for the user, written in a specific language. 


## 6. Assets
- The image assets are load in the preload() method, or can also be called in game (like the openDoor() method).
- The sounds assets are load in the setup() method, to reduce the loading game time and because they are all loaded once.
- All assets are stored in the `assets` folder. You can then create your own templates game or add specific music.
- Please check [here](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blob/master/docs/addContent/method.md) if you want to add new assets to the game.


