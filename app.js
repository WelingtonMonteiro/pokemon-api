/**
 * Created by Welington on 22/05/2017.
 */

'use strict';
var db = require('./load/load.sequelize.js')();
var loadMiddlewares = require('./load/load.middlewares');
var loadRoutes = require('./load/load.route.js');
var loadServer = require('./load/load.server.js');
var express = require('express');
var app = express();

module.exports = app;


loadMiddlewares(app, onMiddleware);


function onMiddleware() {
	loadRoutes(app, onRoutes);
}

function onRoutes() {
	loadServer(app, db);
}
