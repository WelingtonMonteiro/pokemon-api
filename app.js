/**
 * Created by Welington on 22/05/2017.
 */

'use strict';
var db = require('./bin/bin.sequelize.js')();
var binMiddlewares = require('./bin/bin.middlewares');
var binRoutes = require('./bin/bin.route.js');
var binServer = require('./bin/bin.server.js');
var express = require('express');
var app = express();

module.exports = app;

binMiddlewares(app, onMiddleware);


function onMiddleware() {
	binRoutes(app, onRoutes);
}

function onRoutes() {
	binServer(app, db);
}
