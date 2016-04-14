module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', query: { presets: ['es2015', 'react'] }},
    {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
            'style-loader',
            'css-loader?modules',
            'autoprefixer-loader'
        ]
    }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['', '.js', '.json' ]
  }
};