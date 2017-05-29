/**
 * Created by Welington on 22/05/2017.
 */

'use strict';
var express = require('express');
var PokemonController = require('./pokemon.controller');

module.exports = function (app) {
	app.get('/get-pokemons', PokemonController.get);
	app.post('/create-pokemons', PokemonController.create);
	app.put('/buy-pokemons', PokemonController.buy);
}
