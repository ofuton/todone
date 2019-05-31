const path = require('path');

const src = path.resolve(__dirname, 'src', 'js');
const dist = path.resolve(__dirname, 'dist', 'js');

config = {
  entry: {
      content: path.join(src, 'content'),
  },

  output: {
    path: dist,
    filename: '[name].js'
  },

  resolve: {
    extensions: [ '.js' ],
    modules: [src, 'node_modules']
  }
};

module.exports = config
