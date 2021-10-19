const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL).catch(() => {
	console.log("\x1b[31m%s\x1b[0m", "Database connection failed!");
});

mongoose.connection.on("connected", () => {
	console.log("Successfully connected to database!");
});

mongoose.connection.on("disconnected", () => {
	console.log("\x1b[31m%s\x1b[0m", "Database connection disconected!");
});
