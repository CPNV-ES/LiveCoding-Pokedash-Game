const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally')

module.exports = {
  resolve: {
    extensions: ['.js', '.css']
  },
  plugins: [
    new MergeIntoSingleFilePlugin({
      files: {
        'game.mjs': [
          'node_modules/aproba/index.js'
        ]
      }
    })
  ]
}
