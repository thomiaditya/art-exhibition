const express = require("express");
const passport = require("passport");

/**
 * Get express application object.
 */
const app = express();

/**
 * Configure this application that is using .env file.
 */
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
 * Import the configuration file and pass the local passport object through the config.
 */
require("./config/passport")(passport);

/**
 * Intialize passport in order to use it. Its like a turn on button.
 */
app.use(passport.initialize());

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
