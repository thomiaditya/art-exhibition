const router = require("express").Router();
const { body } = require("express-validator");
const passport = require("passport");

// TODO: Add routes to this paintings routes.
// I think the routes might be the GET "/" with page number as request GET body.
// Maybe the award painting routes be the GET "/award" route.
// To post a painting, we can use POST "/upload" route.

router.get("/", require("../controllers/paintingController").allPaintings);
router.post(
	"/factory",
	passport.authenticate("jwt", { session: false }),
	require("../controllers/paintingController").factoryPainting
);

module.exports = router;
