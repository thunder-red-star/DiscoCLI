const fs = require("fs");
const Chalk = require("chalk");
const { install } = require("./install.js")
if (!fs.existsSync("./config/install.json")) {
	console.log("Installation has not occurred yet. Commencing the installation process.")
	install();
}