/**
 * Created by chen on 16/6/12.
 */
/**
 * Created by chen on 16/6/12.
 */
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude:/(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader'  is also a legal name to reference
      query: {
        presets: ['es2015','react']
      }
    }]
  }
};