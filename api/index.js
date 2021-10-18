const express = require("express");
const app = express();
require("dotenv").config();

/**
 * Starting the server
 */
const port = process.env.PORT;

app.listen(port, () => {
	console.log(`Listening on http://localhost:${port}/ ...`);
});
