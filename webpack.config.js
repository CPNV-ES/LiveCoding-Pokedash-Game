const path = require('path');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'game.mjs',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MergeIntoSingleFilePlugin({
      files: {
        "game.mjs": [
          // Specify files to merge into the main file
          'src/main.js',
          'src/PokedashGame.js'
        ]
      }
    })
  ]
};