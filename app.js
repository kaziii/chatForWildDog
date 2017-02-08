var express = require('express');
var webpack = require('webpack');

var webpackConfig = require('./webpack.config.js');
var compiler = webpack(webpackConfig);
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var path = require('path');

var app = express();
var router = express.Router();

app.get('/', function(req, res) {

    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.use(webpackDevMiddleware(compiler, {

    publicPath: webpackConfig.output.publicPath,
    headers: {"X-Custom-Header": true}
}));
app.use(webpackHotMiddleware(compiler));

app.listen('3000');
