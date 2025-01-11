const { Client } = require("pg");
const dbConfig = new Client({
	user: process.env.DB_USER || "jeevesplace",
	password: process.env.DB_PASSWORD || "MegaSecret1234",
	host: process.env.DB_HOST || "localhost",
	port: process.env.DB_PORT || "5432",
	database: process.env.DB || "jeevesplace",
});

const initializeDatabase = async () => {
	const client = new Client(dbConfig);
	try {
		await client.connect();
		console.log("Connected to PostgreSQL database");
		return client;
	} catch (error) {
		console.error("Error connecting to PostgreSQL database", error);
	}
};

module.exports = { initializeDatabase };
