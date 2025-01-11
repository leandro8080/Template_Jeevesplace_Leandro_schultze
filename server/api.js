const { initializeDatabase } = require("./database");

let db;

const initializeAPI = async (app) => {
	db = await initializeDatabase();
	app.get("/api/hello-world", helloWorld);
};

const helloWorld = async (req, res) => {
	res.status(200).send("Hello World");
};

module.exports = { initializeAPI };
