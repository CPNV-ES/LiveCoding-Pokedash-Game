# Add new song
## Description
Add a new song to a level

## Procedure
### 1. Download a .mp3 song
Download a mp3 song and store it in `assets/music/yourMusic.mp3`

### 2. Set it in a map
Go in a specific map (example: `src/maps/nemo.js`), and set the music:
```javascript
music: 'yourMusic.mp3',
```

### 3. Add in the library
In the constructor of Game (`src/Game.js`), add your music to the library :
```javascript
this.musicBasePath = 'music'
this.musics = [
    `${this.assetsBasePath}/${this.musicBasePath}/pokemon.mp3`,
    `${this.assetsBasePath}/${this.musicBasePath}/lostWoods.mp3`,
    `${this.assetsBasePath}/${this.musicBasePath}/davide.mp3`,
    `${this.assetsBasePath}/${this.musicBasePath}/bonus.mp3`,
    `${this.assetsBasePath}/${this.musicBasePath}/zeldaRed.mp3`,
    `${this.assetsBasePath}/${this.musicBasePath}/yourMusic.mp3` // Add your new music here 
]
```

### 4. It's done !
Your music will now be played in the nemo level ! 