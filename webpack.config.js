const path = require('path');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'gamet.mjs',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MergeIntoSingleFilePlugin({
      files: {
        "game.mjs": [
          // Specify files to merge into the main file
          // p5.js
          'node_modules/p5/lib/p5.min.js',
          'node_modules/p5/lib/addons/p5.dom.min.js',
          'node_modules/p5/lib/addons/p5.sound.min.js',

          // Pikachu Classes
          'src/elements/Element.js',
          'src/elements/StaticElement.js',
          'src/elements/MovableElement.js',
          'src/elements/Boulder.js',
          'src/elements/Door.js',
          'src/elements/Protagonist.js',
          'src/elements/Pokeball.js',
          'src/elements/Road.js',
          'src/elements/Tree.js',
          'src/DynamicElement.js',
          'src/PokedashGame.js',
          'src/main.js'
        ]
      }
    })
  ]
};