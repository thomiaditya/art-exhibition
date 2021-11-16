const router = require("express").Router();
const { body } = require("express-validator");
const passport = require("passport");

router.post(
	"/register",
	body("username").isString(),
	body("password").isString(),
	body("first_name").isString(),
	body("last_name").isString(),
	body("photo_path").isString(),
	require("../controllers/userController").register
);

router.post(
	"/login",
	body("username").isString(),
	body("password").isString(),
	require("../controllers/userController").login
);

router.get(
	"/protected",
	passport.authenticate("jwt", { session: false }),
	function (req, res, next) {
		res.status(200).json({ success: true, message: "You made it here!" });
	}
);

module.exports = router;
