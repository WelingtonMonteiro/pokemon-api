/**
 * Created by Welington on 22/05/2017.
 */

'use strict';
var bodyParser = require('body-parser');
var express = require('express');
var morgan = require('morgan');
var helmet = require('helmet');
var compression = require('compression');
var logger  = require('./bin.logger');

module.exports = binMiddleware;

function binMiddleware(app, done) {
	var PORT = process.env.PORT || 3000;
	var env = process.env.NODE_ENV = 'dev';

	app.set('port', PORT);
	app.set('json spaces', 4);	
	app.use(helmet());
	app.use(compression());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(express.static('public'));
	// if (process.env.NODE_ENV !== 'test') {
		app.use(morgan('combined', logger));
	// }
	done();
}
