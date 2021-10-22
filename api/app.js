const express = require("express");
const passport = require("passport");

const app = express();

require("dotenv").config();

/**
 * Setting up connection to the MongoDB database using mongoose.
 */
require("./config/database");

/**
 * Automatically require all models from models directory.
 */
require("./models");

/**
 * Using the express new implementation of bodyparser to parse request data in javascript object format.
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Define all api routes, available in routes directory.
 */
app.use(require("./routes"));

/**
 * Starting the server.
 */
const PORT = process.env.API_PORT;

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}/ ...`);
});
