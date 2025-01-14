const { Client } = require("pg");
const dbConfig = new Client({
	user: process.env.DB_USER || "jeevesplace",
	password: process.env.DB_PASSWORD || "MegaSecret1234",
	host: process.env.DB_HOST || "localhost",
	port: process.env.DB_PORT || "5432",
	database: process.env.DB || "jeevesplace",
});

const createTablesQuery = `
	CREATE TABLE IF NOT EXISTS users (
		id SERIAL PRIMARY KEY,
		firstname TEXT NOT NULL,
		lastname TEXT NOT NULL
	);`; // Insert more queries in this string;

const initializeDatabase = async () => {
	const client = new Client(dbConfig);
	try {
		await client.connect();
		await queryDB(client, createTablesQuery); // Create tables
		console.log("Connected to PostgreSQL database");

		return client;
	} catch (error) {
		console.error("Error connecting to PostgreSQL database", error);
		return;
	}
};

const queryDB = async (db, query) => {
	try {
		const result = await db.query(query);
		return result.rows;
	} catch (error) {
		console.error("Error executing query", error);
		throw error;
	}
};

module.exports = { initializeDatabase };
