/**
 * Created by Welington on 28/05/2017.
 */
process.env.NODE_ENV = 'test';

var Pokemon = require('../../modules/pokemon/pokemon.model');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Pokemons', function () {
	
	// beforeEach(function (done) {
	// 	Pokemon.destroy({
	// 		where: {},
	// 		//truncate: true
	// 	}).then(function (err) {
	// 		done();
	// 	});
	// });

	/**
	 * Test the /POST route
	 */
	describe('/POST Create pokemons', function () {
		it('it should Create  pokemons', function (done) {
			var pokemon = { 	"name": "pikachu", 	"price": 18.5, "stock": 3 }
			
			chai.request(server)
				.post('/create-pokemons')
				.send(pokemon)
				.end(function (err, res) {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('name').eql('required');
					res.body.errors.should.have.property('stock').eql('required');
					res.body.errors.pages.should.have.property('price').eql('required');
					done();
				});
		});
	});

	/**
	 * Test the /GET route
	 */
	describe('/GET all pokemons', function () {
		it('it should GET all the pokemons', function (done) {
			chai.request(server)
				.get('/get-pokemons')
				.end(function (err, res) {
					res.should.have.status(200);
					res.body.should.be.a('array');
					res.body.length.should.be.eql(0);
					done();
				});
		});
	});

	/**
	 * Test the /POST route
	 */
	describe('/PUT Update pokemons', function () {
		it('it should Update  pokemons', function (done) {
			var pokemon = { 	"name": "pikachu", 	"quantity": 1 }

			chai.request(server)
				.put('/buy-pokemons')
				.send(pokemon)
				.end(function (err, res) {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('name').eql('required');
					res.body.errors.should.have.property('quantity').eql('required');
					res.body.errors.pages.should.have.property('status').eql('paid');
					done();
				});
		});
	});

});
