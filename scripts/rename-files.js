const fs = require("fs-extra");
const path = require("path");

const sourceDir = "./dist/esm";
const fileExtension = ".mjs";

fs.readdirSync(sourceDir)
	.filter((file) => file.endsWith(".js"))
	.forEach((file) => {
		const oldPath = path.join(sourceDir, file);
		const newPath = path.join(sourceDir, file.replace(".js", fileExtension));
		fs.moveSync(oldPath, newPath);
	});

console.log("File renaming completed.");
