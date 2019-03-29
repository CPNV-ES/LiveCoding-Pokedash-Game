# Name and structure conventions
To load dynamically a level, you have to be careful about the name or the structure of specifics elements. Here is a resume where the convention applies :

## Element
If you create a new Element class, you have to create it in the folder `src/elements` with this format: `YourNewClassElement.js`

## Sprite
The name of the sprite is the name of the element + `Img.png`. The format of the file is png. Example:

    Element name :  MyNewElement.js
    Sprite name : myNewElementImg.png


## Music
Each music has to be in mp3 with this syntax: `yourMusicName.mp3`

## Level
Please check this [example file](https://github.com/CPNV-ES/LiveCoding-Pokedash-Game/blob/master/src/maps/_roadTemplate.js) to know the structure of a level.

## Method (interpreters)
The methods you want to translate in a specific language respect the specific language naming convention. 
 
For example, a function in the game called `myNewFunction()` will be : 
    
**Php** :

```php (camelCase)
function myNewFunction()
``` 
**Ruby** :
``` ruby (snake_case)
def my_new_function
```
