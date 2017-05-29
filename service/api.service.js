/**
 * Created by Welington on 25/05/2017.
 */
var request = require('request-promise');
var URL = 'https://api.pagar.me/1/transactions';
var APIKEY = "ak_test_WHgSu2XFmvoopAZMetV3LfA2RfEEQg";

module.exports = {
	post: post
}


/**
 * 
 * @param object Object return findOne
 * @param newObject Object request from front
 * @param success function success
 * @param error function error
 */
function post(object, newObject, success, error) {
	'use strict';
	var opts = {
		uri: URL,
		method: 'POST',
		json: {
			api_key: APIKEY,
			amount: object.price * newObject.quantity * 100,
			card_number: newObject.card_number,//"4024007138010896",
			card_expiration_date: newObject.card_expiration_date,//"1050",
			card_holder_name: newObject.card_holder_name,//"Ash Ketchum",
			card_cvv: newObject.card_cvv,//"123",
			metadata: {
				product: 'pokemon',
				name: object.name,
				quantity: newObject.quantity
			}
		}
	}

	request(opts)
		.then(success)
		.catch(error)
}
