require("fs")
	.readdirSync(__dirname)
	.forEach(function (file) {
		if (file === "index.js") return;
		require("./" + file);
	});
