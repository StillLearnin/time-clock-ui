module.exports = {
  module: {
    loaders: [
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
  }
};