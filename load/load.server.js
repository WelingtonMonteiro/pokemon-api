/**
 * Created by Welington on 22/05/2017.
 */

'use strict';
module.exports = loadServer;

var http = require('http');
var port = '';

function loadServer(app, db) {
	port = app.get('port');
	db.conn.sync().done(onSync);

	function onSync() {
		http
			.createServer(app)
			.listen(port, onListen)
			.on('error', onError);
	}
}

function onListen() {
	return console.log('API Node.js pokemon v1.0.0 - Porta: ' + port);
	
}

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	var bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}
