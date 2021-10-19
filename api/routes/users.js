const mongoose = require("mongoose");
const router = require("express").Router();
const User = mongoose.model("User");

router.get("/login", function (req, res, next) {
	res.json({
		success: true,
	});
});

module.exports = router;
