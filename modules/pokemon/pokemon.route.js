/**
 * Created by Welington on 22/05/2017.
 */

'use strict';
var express = require('express');
var PokemonController = require('./pokemon.controller');

module.exports = function (app) {
	app.get('/pokemon', PokemonController.get);
	app.post('/pokemon', PokemonController.create);
	app.put('/pokemon/buy', PokemonController.buy);
}
