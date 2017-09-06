/**
 * Created by Welington on 24/05/2017.
 */


/**
 * @api {GET} /pokemons Get All Pokemons
 * @apiGroup Pokemon
 * @apiversion 1.0.0
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * [{
 *	"id": "1",
 *	"name": "pikachu",
 *	"price": 2.5,
 *	"stock": 3
 * } ]
 */

/**
 * @api {POST} /pokemon Create pokemons
 * @apiGroup Pokemon
 * @apiversion 1.0.0
 * @apiParam {string{1..255}} name
 * @apiParam {integer} price
 * @apiParam {integer} stock
 * @apiParamExample {json} input
 * { 
 *	"name": "pikachu",
 *	"price": 18.2,
 *	"stock": 3
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
    "id": 1,
    "name": "pikachu",
    "price": 18.5,
    "stock": 3,
    "updated_at": "2017-05-29T14:27:00.000Z",
    "created_at": "2017-05-29T14:27:00.000Z"
}
 */

/**
 * @api {PUT} /pokemon/buy Buy pokemons
 * @apiGroup Pokemon
 * @apiversion 1.0.0
 * @apiParam {string{1..255}} name
 * @apiParam {number{1-999}} quantity
 * @apiParam {string{9999999999999999}} card_number
 * @apiParam {string{1..255}} card_holder_name
 * @apiParam {string{1..3}} card_expiration_date
 * @apiParam {string{1..3}} card_cvv
 * @apiParamExample {json} input
 * {
        "name": "Pikachu",
        "quantity": 1,
        "card_number": "4024007138010896",
        "card_holder_name": "Ash Ketchum",
        "card_expiration_date": "1050",
        "card_cvv": "123"
    }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
    "object": "transaction",
    "status": "paid",
    "refuse_reason": null,
    "status_reason": "acquirer",
    "acquirer_response_code": "0000",
    "acquirer_name": "pagarme",
    "acquirer_id": "578b9956ec7067fa73934d3b",
    "authorization_code": "494718",
    "soft_descriptor": null,
    "tid": 1577341,
    "nsu": 1577341,
    "date_created": "2017-05-29T09:59:51.996Z",
    "date_updated": "2017-05-29T09:59:52.490Z",
    "amount": 1900,
    "authorized_amount": 1900,
    "paid_amount": 1900,
    "refunded_amount": 0,
    "installments": 1,
    "id": 1577341,
    "cost": 50,
    "card_holder_name": "Ash Ketchum",
    "card_last_digits": "0896",
    "card_first_digits": "402400",
    "card_brand": "visa",
    "card_pin_mode": null,
    "postback_url": null,
    "payment_method": "credit_card",
    "capture_method": "ecommerce",
    "antifraud_score": null,
    "boleto_url": null,
    "boleto_barcode": null,
    "boleto_expiration_date": null,
    "referer": "api_key",
    "ip": "179.157.109.162",
    "subscription_id": null,
    "phone": null,
    "address": null,
    "customer": null,
    "card": {
        "object": "card",
        "id": "card_ciqqqbpyy00vgx26e26b84fgt",
        "date_created": "2016-07-17T15:00:31.933Z",
        "date_updated": "2017-04-09T15:41:28.476Z",
        "brand": "visa",
        "holder_name": "Ash Ketchum",
        "first_digits": "402400",
        "last_digits": "0896",
        "country": "US",
        "fingerprint": "Eh77mr4zT8zz",
        "valid": true,
        "expiration_date": "1050"
    },
    "split_rules": null,
    "metadata": {
        "product": "pokemon",
        "name": "pikachu",
        "quantity": 1
    },
    "antifraud_metadata": {}
}
 */

