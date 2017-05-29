/**
 * Created by Welington on 25/05/2017.
 */
var forever = require('forever-monitor');
var Monitor = forever.Monitor;
var config = {
	max: 10,
	silent: false,
	killTree: true,
	logFile: './log/forever.log',
	outFile: './log/app.log',
	errFile: './log/error.log'
};

var child = new Monitor('app.js', config);

child.on('exit', onExit);

function onExit() {
	'use strict';

	console.log('O server foi finalizado.');
}

child.start();
