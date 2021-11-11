const mongoose = require("mongoose");

/**
 * Author Details
 *
 * First Name -> String
 * Last Name -> String
 * Photo Path -> String
 * Date of Birth -> Date
 * Nationality -> Country Data
 * Description -> Long Text
 * Job -> String
 *
 */
const authorSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	photo_path: String,
	date_of_birth: Date,
	nationality: String,
	desc: String,
	job: String,
});

mongoose.model("Author", authorSchema);
