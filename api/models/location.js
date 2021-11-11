const mongoose = require("mongoose");
/**
 * Location Details
 *
 * Location Name -> String
 * Country -> String
 *
 */
const locationSchema = new mongoose.Schema({
	loc_name: String,
	country: String,
});

mongoose.model("Location", locationSchema);
