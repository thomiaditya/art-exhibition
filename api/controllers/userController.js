const mongoose = require("mongoose");
const User = mongoose.model("User");
const utils = require("../lib/utilities");
const { validationResult } = require("express-validator");

module.exports = {
	register(req, res, next) {
		// Validate the input body.
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

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
				const jwt = utils.jwtIssuer(user);

				res.json({
					success: true,
					user,
					token: jwt.token,
					expiresIn: jwt.expiredIn,
				});
			})
			.catch((err) => {
				next(err);
			});
	},

	login(req, res, next) {
		// Validate the input body.
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		User.findOne({ username: req.body.username }).then((user) => {
			if (!user) {
				return res.status(401).json({
					success: false,
					message: "User not found in the database!",
				});
			}

			if (!utils.validatePassword(req.body.password, user.hash, user.salt)) {
				return res.status(401).json({
					success: false,
					message: "Wrong password entered!",
				});
			}

			const jwt = utils.jwtIssuer(user);

			return res.status(200).json({
				success: true,
				token: jwt.token,
				expiresIn: jwt.expiredIn,
			});
		});
	},
};
