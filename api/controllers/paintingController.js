const mongoose = require("mongoose");
const Painting = mongoose.model("Painting");
const faker = require("faker");

module.exports = {
	// TODO: This module contains the controller method that implements on paintings route.
	allPaintings(req, res, next) {
		// Get the page number from url query.
		const page = req.query.page;
		// Grab the list (20 paintings) from database based on page number.
		// Return the list grabbed.
		// TODO: Create pagination in this route.

		res.status(200).json({ success: true });
	},
	factoryPainting(req, res, next) {
		// Create new document and store it in database.
		for (let i = 0; i < req.body.amount; i++) {
			const newPainting = new Painting({
				title: faker.lorem.words(),
				desc: faker.lorem.sentence(),
				image_path: "https://picsum.photos/200",
				// author,
				publisher: req.user._id,
				// place,
				signature: "https://picsum.photos/50",
			});

			newPainting
				.save()
				.then((painting) => {
					console.log(`Successfully saved ${i + 1} using factory.`);
				})
				.catch((e) => {
					res.status(409).json({
						success: false,
						msg: "Cannot register painting due to conflict.",
					});
				});
		}
		res.status(200).json({ success: true, msg: "Factory finished!" });
	},
};
