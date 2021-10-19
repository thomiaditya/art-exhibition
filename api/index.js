const express = require("express");
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
 * Instead of using body-parser middleware, use the new Express implementation of the same thing.
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Define all api routes, available in routes directory.
 */
app.use("/api/v1", require("./routes"));
console.log(app._router);

/**
 * Starting the server.
 */
const port = process.env.PORT;

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}/ ...`);
});
