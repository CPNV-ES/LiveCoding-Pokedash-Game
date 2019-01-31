const path = require('path');

module.exports = {
  entry: './src/PokedashGame.js',
  resolve: {
    extensions: ['.js']
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
