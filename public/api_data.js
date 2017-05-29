define({ "api": [
  {
    "type": "GET",
    "url": "/get-pokemons",
    "title": "Get All Pokemons",
    "group": "Pokemon",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n\t\"id\": \"1\",\n\t\"name\": \"pikachu\",\n\t\"price\": 2.5,\n\t\"stock\": 3\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/pokemon/pokemon.doc.js",
    "groupTitle": "Pokemon",
    "name": "GetGetPokemons"
  },
  {
    "type": "POST",
    "url": "/create-pokemons",
    "title": "Create pokemons",
    "group": "Pokemon",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "size": "1..255",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "price",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "integer",
            "optional": false,
            "field": "stock",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "input",
          "content": "{ \n\t\"name\": \"pikachu\",\n\t\"price\": 18.2,\n\t\"stock\": 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": 1,\n    \"name\": \"pikachu\",\n    \"price\": 18.5,\n    \"stock\": 3,\n    \"updated_at\": \"2017-05-29T14:27:00.000Z\",\n    \"created_at\": \"2017-05-29T14:27:00.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/pokemon/pokemon.doc.js",
    "groupTitle": "Pokemon",
    "name": "PostCreatePokemons"
  },
  {
    "type": "PUT",
    "url": "/buy-pokemons",
    "title": "Buy pokemons",
    "group": "Pokemon",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "size": "1..255",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "size": "1-999",
            "optional": false,
            "field": "quantity",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "9999999999999999",
            "optional": false,
            "field": "card_number",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "1..255",
            "optional": false,
            "field": "card_holder_name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "1..3",
            "optional": false,
            "field": "card_expiration_date",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "1..3",
            "optional": false,
            "field": "card_cvv",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "input",
          "content": "{\n        \"name\": \"Pikachu\",\n        \"quantity\": 1,\n        \"card_number\": \"4024007138010896\",\n        \"card_holder_name\": \"Ash Ketchum\",\n        \"card_expiration_date\": \"1050\",\n        \"card_cvv\": \"123\"\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"object\": \"transaction\",\n    \"status\": \"paid\",\n    \"refuse_reason\": null,\n    \"status_reason\": \"acquirer\",\n    \"acquirer_response_code\": \"0000\",\n    \"acquirer_name\": \"pagarme\",\n    \"acquirer_id\": \"578b9956ec7067fa73934d3b\",\n    \"authorization_code\": \"494718\",\n    \"soft_descriptor\": null,\n    \"tid\": 1577341,\n    \"nsu\": 1577341,\n    \"date_created\": \"2017-05-29T09:59:51.996Z\",\n    \"date_updated\": \"2017-05-29T09:59:52.490Z\",\n    \"amount\": 1900,\n    \"authorized_amount\": 1900,\n    \"paid_amount\": 1900,\n    \"refunded_amount\": 0,\n    \"installments\": 1,\n    \"id\": 1577341,\n    \"cost\": 50,\n    \"card_holder_name\": \"Ash Ketchum\",\n    \"card_last_digits\": \"0896\",\n    \"card_first_digits\": \"402400\",\n    \"card_brand\": \"visa\",\n    \"card_pin_mode\": null,\n    \"postback_url\": null,\n    \"payment_method\": \"credit_card\",\n    \"capture_method\": \"ecommerce\",\n    \"antifraud_score\": null,\n    \"boleto_url\": null,\n    \"boleto_barcode\": null,\n    \"boleto_expiration_date\": null,\n    \"referer\": \"api_key\",\n    \"ip\": \"179.157.109.162\",\n    \"subscription_id\": null,\n    \"phone\": null,\n    \"address\": null,\n    \"customer\": null,\n    \"card\": {\n        \"object\": \"card\",\n        \"id\": \"card_ciqqqbpyy00vgx26e26b84fgt\",\n        \"date_created\": \"2016-07-17T15:00:31.933Z\",\n        \"date_updated\": \"2017-04-09T15:41:28.476Z\",\n        \"brand\": \"visa\",\n        \"holder_name\": \"Ash Ketchum\",\n        \"first_digits\": \"402400\",\n        \"last_digits\": \"0896\",\n        \"country\": \"US\",\n        \"fingerprint\": \"Eh77mr4zT8zz\",\n        \"valid\": true,\n        \"expiration_date\": \"1050\"\n    },\n    \"split_rules\": null,\n    \"metadata\": {\n        \"product\": \"pokemon\",\n        \"name\": \"pikachu\",\n        \"quantity\": 1\n    },\n    \"antifraud_metadata\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./modules/pokemon/pokemon.doc.js",
    "groupTitle": "Pokemon",
    "name": "PutBuyPokemons"
  }
] });
