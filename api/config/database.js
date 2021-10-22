const mongoose = require("mongoose");

/**
 * Connect to the MongoDB database and checking error occured while connecting.
 */
mongoose.connect(process.env.API_MONGODB_URL).catch(() => {
	console.log("\x1b[31m%s\x1b[0m", "Database connection failed!");
});

/**
 * Creating event listener to the connection connected and the connection disconected,
 * so we can get notified if the app is not currently connected to the database.
 */
mongoose.connection.on("connected", () => {
	console.log("Successfully connected to database!");
});
mongoose.connection.on("disconnected", () => {
	console.log("\x1b[31m%s\x1b[0m", "Database connection disconected!");
});
