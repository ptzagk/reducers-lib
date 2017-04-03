const webpack = require('webpack')
const package = require('./package.json');

const target_environment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
  ? 'development'
  : 'production'

module.exports = {
  entry: {
    vendor: Object.keys(package.dependencies),
    main: './src/main.jsx'
  },
  output: {
    path: '/usr/src/app/www/js',
    filename: `[name].js`
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /core/],
        enforce: 'pre',
        loader: 'standard-loader'
      },
      {
        test: /\.jsx$/,
        exclude: [/node_modules/, /core/],
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              'react',
              'es2015'
            ]
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /core/],
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: false,
            compact: false,
            presets: ['es2015'],
            plugins: ['transform-inline-environment-variables']
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify(target_environment)}),
    target_environment === 'development'
      ? new webpack.DefinePlugin({})
      : new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['shared', 'vendor'],
      filename:`[name].bundle.js`,
      minChunks: 2
    })
  ],
  devtool: target_environment === 'development' ? 'source-map' : undefined
}
