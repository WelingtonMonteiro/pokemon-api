/**
 * Created by Welington on 22/05/2017.
 */

'use strict';
var winston = require('winston');
winston.emitErrs = true;

var tsFormat = function () {
	(new Date()).toLocaleTimeString()
};

var logger = new winston.Logger({
	transports: [
		new winston.transports.File({
			level: 'info',
			timestamp: tsFormat,
			filename: './log/logs.log',
			handleExceptions: true,
			json: true,
			maxsize: 5242880, //5MB
			maxFiles: 5,
			colorize: false
		}),
		new winston.transports.Console({
			level: 'debug',
			timestamp: tsFormat,
			handleExceptions: true,
			json: false,
			colorize: true
		})
	],
	exitOnError: false
});

module.exports = logger;

module.exports.stream = {
	write: function(message, encoding){
		logger.info(message);
	}
};
