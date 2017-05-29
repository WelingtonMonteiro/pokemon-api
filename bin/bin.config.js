/**
 * Created by Welington on 21/05/2017.
 */
module.exports = {
	dev: envDev(),
	prod: envProd(),
	test: envTest()};

function envDev(){
	return {
		database: "pokemons-dev",
		username: "",
		password: "",
		params: {
			host: "127.0.0.1",
			dialect: "sqlite",
			// dialect: "mysql",
			port: 3306,
			storage: "../pokemons-dev.sqlite",
			pool: {
				max: 5,
				min: 0,
				idle: 10000
			},
			// dialectOptions: {
			// 	socketPath: "/var/run/mysqld/mysqld.sock"
			// },
			define: {
				underscored: true,
				paranoid: true
			},
			sync: {force: true}
		}
	}
}

function envProd(){
	return {
		database: "pokemons",
		username: "",
		password: "",
		params: {
			host: "127.0.0.1",
			dialect: "sqlite",
			// dialect: "mysql",
			port: 3306,
			storage: "../pokemons.sqlite",
			pool: {
				max: 5,
				min: 0,
				idle: 10000
			},
			// dialectOptions: {
			// 	socketPath: "/var/run/mysqld/mysqld.sock"
			// },
			define: {
				underscored: true,
				paranoid: true
			},
			sync: {force: true}
		}
	}
}

function envTest(){
	return {
		database: "pokemons-test",
		username: "",
		password: "",
		params: {
			host: "127.0.0.1",
			dialect: "sqlite",
			// dialect: "mysql",
			port: 3306,
			storage: "../pokemons-test.sqlite",
			pool: {
				max: 5,
				min: 0,
				idle: 10000
			},
			// dialectOptions: {
			// 	socketPath: "/var/run/mysqld/mysqld.sock"
			// },
			define: {
				underscored: true,
				paranoid: true
			},
			sync: {force: true}
		}
	}
}
