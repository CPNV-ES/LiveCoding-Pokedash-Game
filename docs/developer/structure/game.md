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

The Game class also provide a method named executeGameCommand to execude the game commands sended by the processor. This method must accept a string (the command), and return the result in string format.

## 2. P5.js 
Once the class is instancied, we give the hand to p5.js which will create the game structure (set the canvas size, load the sprite according to the box size, load music etc.) through a preload, setup and draw processus.

Here is the order in which P5 works, and what we do in each of these steps:

### 2.1 preload(mapName)
#### Description
Called directly before setup(), the preload() function is used to handle asynchronous loading of external files in a blocking way. If a preload function is defined, setup() will wait until any load calls within have finished. Nothing besides load calls (loadImage, loadSound, loadJSON, loadFont, loadStrings, etc.) should be inside the preload function. If asynchronous loading is preferred, the load methods can instead be called in setup() or anywhere else with the use of a callback parameter. 

To make your own loading page, include an HTML element with id "p5_loading" in your page. More information [here](https://github.com/processing/p5.js/wiki/p5.js-overview#loading-screen).

#### In Pokedash :
In our configuration, the preload function has a 'mapName' parameters, so the game can load a whole new level with another elements and assets. In a certain way, it proves the dynamical strenght of the core application.

All the musics are also loaded from the library during the first launch only.

### 2.2 setup()
#### Description
The setup() function is called once when the program starts. It's used to define initial environment properties such as screen size and background color.

#### In Pokedash :
The setup() function will create canvas, set dynamically the number of columns and rows of the game according to the map loeaded and set the size of each case.

Then, it will generate a 2D map array to stock each element through a personnal function called `iterateOverMap`. Here is how it works :

### 2.2.1 function iterateOverMap()
This function will create a 2D array. Each case will contains an instanciate element created through a factory class named `DynamicElement`.

We will then have a 2D structure full of elements ready to work with.

### 2.3 draw()
#### Description
Once the 2D array is generated, we will loop through it

#### In Pokedash :
## 3. Elements

## 4. Assets