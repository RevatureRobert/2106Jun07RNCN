var viewConfig = require('./config/view');
var errorConfig = require('./config/error');
var utilitiesConfig = require('./config/utilities');
var routesConfig = require('./config/routes');
var Sequelize = require('sequelize');
var express = require('express');

var app = express();

// used to enable static middleware built into express to serve static files such as images, js, and css
app.use(express.static('public'));
viewConfig(app);
utilitiesConfig(app);
routesConfig(app);
errorConfig(app);

module.exports = app;
