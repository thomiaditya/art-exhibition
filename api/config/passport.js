const fs = require("fs");
const path = require("path");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("mongoose").model("User");

const keyPath = path.join(__dirname, "..", "id_rsa.pub");
const PUB_KEY = fs.readFileSync(keyPath, "utf-8");

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: PUB_KEY,
	algorithms: ["RS256"],
};

/**
 * Verify Method
 * This module is needed to write the configuration needed on passport. Actually, there is only one method that needed the most
 * it is the verify method passport has.
 *
 * @param {passport} passport
 */
module.exports = (passport) => {
	passport.use(
		new JwtStrategy(options, function (payload, done) {
			User.findOne({ _id: payload.sub }, function (err, user) {
				if (err) return done(err, false);
				if (!user) return done(null, false);
				return done(null, user);
			});
		})
	);
};
