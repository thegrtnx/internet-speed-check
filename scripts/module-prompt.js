const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Which module format do you want to use? (1) CommonJS or (2) ECMAScript (ESM): ", (answer) => {
	switch (answer.trim().toLowerCase()) {
		case "1":
		case "commonjs":
			console.log("Using CommonJS module format...");
			startApp("dist/cjs/index.js");
			break;

		case "2":
		case "esm":
			console.log("Using ECMAScript module format...");
			startApp("dist/esm/index.mjs");
			break;

		default:
			console.log("Invalid choice. Using CommonJS module format by default...");
			startApp("dist/cjs/index.js");
			break;
	}

	rl.close();
});

function startApp(entryPoint) {
	const { spawn } = require("child_process");
	spawn("node", [entryPoint], { stdio: "inherit" });
}
