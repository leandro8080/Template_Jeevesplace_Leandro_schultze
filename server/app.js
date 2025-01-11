const express = require("express");
const http = require("http");
const { initializeAPI } = require("./api");

// Create the express server
const app = express();
app.use(express.json());
const server = http.createServer(app);

// Static files from client folder (css, js, images)
app.use(express.static("client"));

// Routes for homepage
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/client/index.html");
});
// Add more routes for html files

// Initialize API
initializeAPI(app);

// Start the web server
const serverPort = process.env.PORT || 3000;
server.listen(serverPort, () => {
	console.log(`Express Server started on port ${serverPort}`);
});
