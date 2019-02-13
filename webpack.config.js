const path = require('path');

module.exports = {
  entry: './src/Game.js',
  resolve: {
    extensions: ['.js']
  },
  output: {
    filename: 'game.mjs',
    path: path.resolve(__dirname, 'dist'),
    // Specify the output of the library will be available under the Game property
    library: 'gameModule',
    // Specify the Game class will be lodaed under the window object
    libraryTarget: 'window'
  }
};
