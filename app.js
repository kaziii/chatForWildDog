var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var path = require('path');
var app = express();
var router = express.Router();

var webpackConfig = require('./config/webpack.config');
var compiler = webpack(webpackConfig);

require('log4js').replaceConsole();
global.CONFIG = require('./config/dev.config');

app.use(express.static('build'));

app.get('/', function(req, res) {

    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.use(webpackDevMiddleware(compiler, {

    publicPath: webpackConfig.output.publicPath,
    headers: {"X-Custom-Header": true}
}));
app.use(webpackHotMiddleware(compiler));

app.listen(CONFIG.port, function () {

	console.log(`dev start run ${CONFIG.port}`);
});
