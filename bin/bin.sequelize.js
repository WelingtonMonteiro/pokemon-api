/**
 * Created by Welington on 23/05/2017.
 */

var env = process.env.NODE_ENV || 'dev';
var Config = require('./bin.config')[env];

module.exports = AppSequelize;

var Sequelize = require('sequelize');
var DB = null;
var objectDB = {
	conn: {},
	Sequelize: Sequelize,
	Models: {}
};

function AppSequelize() {
	if (DB) return objectDB;

	objectDB.conn = DB = new Sequelize(Config.database, Config.username, Config.password, Config.params);

	return objectDB;

}

