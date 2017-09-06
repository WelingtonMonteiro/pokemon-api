/**
 * Created by Welington on 23/05/2017.
 */
var PokemonModel = require('./pokemon.model');
var apiService = require('../../service/api.service');
var responseService = require('../../service/response.service');

module.exports = {
	get: get,
	create: create,
	buy: buy
};

/**
 *
 * @param req
 * @param res
 */
function get(req, res) {

	PokemonModel.findAll({})
		.then(listOfPokemons);


	function listOfPokemons(pokemons) {
		responseService.success(res, pokemons);
	}
}

/**
 *
 * @param req
 * @param res
 */
function create(req, res) {
	var newPokemon = req.body;
	if (!newPokemon) return responseService.error(res, {error: 'Object pokemon is required!'});
	if (!newPokemon.name) return responseService.error(res, {error: 'name pokemon is required!'});
	if (!newPokemon.price) return responseService.error(res, {error: 'price pokemon is required!'});
	if (newPokemon.price < 0) return responseService.error(res, {error: 'price pokemon greated zero!'});
	if (!newPokemon.stock) return responseService.error(res, {error: 'stock pokemon is required!'});


	PokemonModel.create(newPokemon)
		.then(sendPokemon);

	function sendPokemon(pokemon) {		
		responseService.success(res, pokemon)
	}
}

/**
 *
 * @param req
 * @param res
 */
function buy(req, res) {
	var newPokemon = req.body;

	if (!newPokemon) return responseService.error(res, {error: 'Object pokemon is required!'});
	if (!newPokemon.name) return responseService.error(res, {error: 'name pokemon is required!'});
	if (!newPokemon.quantity) return responseService.error(res, {error: 'quantity pokemon is required!'});
	if (newPokemon.quantity < 0 ) return responseService.error(res, {error: 'quantity pokemon greated 0!'});

	var query = {
		where: {
			name: newPokemon.name
		}
	};


	PokemonModel.findOne(query)
		.then(onSuccess).catch(onError);

	function onSuccess(pokemon) {
		if (!pokemon)return responseService.error(res, {error: "pokemon name '" + newPokemon.name + "' not found!"});

		if (pokemon && pokemon.stock < newPokemon.quantity) {
			return responseService.error(res, {error: 'Not enought ' + pokemon.name + ' in stock: ' + pokemon.stock}, 400)
		}

		apiService.post(pokemon, newPokemon, onSuccessApi, onError);

		function onSuccessApi(body) {
			if (body.status === 'paid') {

				pokemon.stock = pokemon.stock - newPokemon.quantity;
				pokemon.save()
					.then(function (data) {
						responseService.success(res, body);
					})
					.catch(onError)
			}
		}

	}
	
	function onError(err) {
		return responseService.error(res, {error: err.response.body}, err.response.statusCode);
	}

}
