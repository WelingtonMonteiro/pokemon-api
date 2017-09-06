/**
 * Created by Welington on 03/06/2017.
 */
'use strict';
var env = require('dotenv');

function initEnv(){
	var environment = process.env.NODE_ENV || 'dev';
	
	if (environment === 'dev')
		env.config();
	
	else if (environment === 'test') 
		env.config({ path: '.env.test' });
		
	env.load();
};

module.exports = initEnv;
