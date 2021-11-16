const router = require("express").Router();

router.use("/user", require("./users"));
router.use("/painting", require("./paintings"));

module.exports = router;
