const router = require("express").Router();

/**
 * Register POST route.
 */
router.post("/register", require("../controllers/userController").register);

module.exports = router;
