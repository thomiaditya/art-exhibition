const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const jsonwebtoken = require("jsonwebtoken");

const keyPath = path.join(__dirname, "..", "id_rsa");
const PRIV_KEY = fs.readFileSync(keyPath, "utf-8");

module.exports = {
	/**
	 * Helper function which functionate to generate Hash and Salt from string password.
	 *
	 * @param {string} password
	 * @returns
	 */
	genHashSaltFromPassword(password) {
		let salt = crypto.randomBytes(32).toString("hex");
		let hash = crypto
			.pbkdf2Sync(password, salt, 10000, 64, "sha512")
			.toString("hex");

		return {
			salt,
			hash,
		};
	},

	/**
	 * Helper function to validate password using hash and salt.
	 *
	 * @param {string} password
	 * @param {string} hash
	 * @param {string} salt
	 * @returns
	 */
	validatePassword(password, hash, salt) {
		let hashVerify = crypto
			.pbkdf2Sync(password, salt, 10000, 64, "sha512")
			.toString("hex");
		return hash === hashVerify;
	},

	/**
	 * This function will take a deal with issue JWT problem. A bearer token will be returned along with expired date.
	 *
	 * @param {User Object} user
	 * @returns
	 */
	jwtIssuer(user) {
		const expired = "1d";

		const payload = {
			sub: user._id,
			iat: Date.now(),
		};

		const signed = jsonwebtoken.sign(payload, PRIV_KEY, {
			expiresIn: expired,
			algorithm: "RS256",
		});

		return {
			token: "Bearer " + signed,
			expiredIn: expired,
		};
	},
};
