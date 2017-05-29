/**
 * Created by Welington on 22/05/2017.
 */

var Sequelize = require('sequelize');

var pokemonSchema = {
	id: {
		type: Sequelize.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
	},
	name: {
		type: Sequelize.STRING,
			allowNull: false
	},
	price: {
		type: Sequelize.INTEGER,
			allowNull: false
	},
	stock: {
		type: Sequelize.INTEGER,
			allowNull: true,
			defaultValue: 1
	}
};

module.exports = pokemonSchema;
