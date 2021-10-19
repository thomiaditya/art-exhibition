const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: String,
	hash: String,
	salt: String,
	full_name: String,
});

mongoose.model("User", userSchema);
