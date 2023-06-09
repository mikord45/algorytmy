const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index:'./src/index.js',
  },
  devtool: 'eval-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
    clean: true
  },
};