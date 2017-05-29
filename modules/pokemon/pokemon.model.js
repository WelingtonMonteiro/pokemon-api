/**
 * Created by Welington on 22/05/2017.
 */
var pokemonSchema = require('./pokemon.schema');
var db = require('../../bin/bin.sequelize')();

var PokemonModel = db.conn.define('pokemon', pokemonSchema, {
	tableName: 'pokemon'
});

module.exports = PokemonModel;
