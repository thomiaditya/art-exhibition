const mongoose = require("mongoose");

/**
 * User details
 *
 * User in this case will provided with has and salt as password to prevent attacking. This is common in every
 * project to do.
 *
 * Username -> String
 * Hash -> String
 * Salt -> String
 * First Name -> String
 * Last Name -> String
 * Description -> String
 * Photo Path -> String
 *
 */
const userSchema = new mongoose.Schema({
	username: String,
	hash: String,
	salt: String,
	first_name: String,
	last_name: String,
	desc: String,
	photo_path: String,
});

mongoose.model("User", userSchema);
