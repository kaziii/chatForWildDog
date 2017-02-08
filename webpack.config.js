var webpack = require('webpack');
var path = require('path');
var webpackDevMiddleware = require('webpack-dev-middleware');
require('webpack-hot-middleware');

var DEBUG = process.env.NODE_ENV === 'development';

var config = {

    devtool: "inline-source-map",

    entry: DEBUG ? path.resolve(__dirname, 'src/') : [

            path.resolve(__dirname, 'src/'),
            'webpack-hot-middleware/client?http://localhost:3000'
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: 'http://localhost:3000/build/'
    },

    plugins: [

        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        rules: [
          {
            test: /\.js$/,
            use: [
              'babel-loader',
            ],
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test: /\.(svg|ttf|eot|woff|woff2)$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
          },
        ],
      }
};

module.exports = config;
