const mongoose = require("mongoose");
const User = mongoose.model("User");
const utils = require("../lib/utilities");

module.exports = {
	register(req, res, next) {
		let { salt, hash } = utils.genHashSaltFromPassword(req.body.password);

		const newUser = new User({
			username: req.body.username,
			hash: hash,
			salt: salt,
			full_name: req.body.fullname,
		});

		// Save new user configure above.
		newUser
			.save()
			.then((user) => {
				res.json({
					success: true,
					user,
				});
			})
			.catch((err) => {
				next(err);
			});
	},
};
