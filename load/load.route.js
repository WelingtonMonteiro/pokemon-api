/**
 * Created by Welington on 22/05/2017.
 */

'use strict';
module.exports = function (app, done) {
	require('../modules/pokemon/pokemon.route')(app);
	done();
};
