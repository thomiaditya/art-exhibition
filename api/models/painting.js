const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Painting details
 *
 * Title -> String
 * Description -> Long Text
 * Image Path -> String
 * Author -> Author Collection
 * Publisher -> Users Collection
 * Place -> Location or Places Collection
 * Signature -> String (Link to image path)
 * Created at -> Date
 * Updated at -> Date
 *
 */
const paintingSchema = new mongoose.Schema({
	title: String,
	desc: String,
	image_path: String,
	// author: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: "Author",
	// },
	publisher: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	// place: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: "Location",
	// },
	signature: String,
});

mongoose.model("Painting", paintingSchema);
