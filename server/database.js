const { Client } = require("pg");
const client = new Client({
	user: "jeevesplace",
	password: "MegaSecret1234",
	host: "postgres",
	port: "5432",
	database: "jeevesplace",
});

client
	.connect()
	.then(() => {
		console.log("Connected to PostgreSQL database");
	})
	.catch((err) => {
		console.error("Error connecting to PostgreSQL database", err);
	});
