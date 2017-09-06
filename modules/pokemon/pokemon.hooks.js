/**
 * Created by Welington on 20/06/2017.
 */
module.exports = PokemonHooks;

function PokemonHooks(PokemonSchema) {
	PokemonSchema.path('name').validate(function (name) {
		return name.length <= 50;
	});
	PokemonSchema.path('price').validate(function (price) {
		return price >=0;
	});
	
}
