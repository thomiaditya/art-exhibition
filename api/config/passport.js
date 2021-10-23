const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const keyPath = path.join(__dirname, "..", "id_rsa.pub");
const PUB_KEY = fs.readFileSync(keyPath, "utf-8");

/**
 * Verify Method
 * This module is needed to write the configuration needed on passport. Actually, there is only one method that needed the most
 * it is the verify method passport has.
 *
 * @param {passport} passport
 */
module.exports = (passport) => {
	// TODO: Create passport configuration here.
};
