const fs = require("fs");
const Chalk = require("chalk");
const { install } = require("./install.js")

if (!fs.existsSync("./config/.installed")) {
	console.log("Installation has not occurred yet. Commencing the installation process.")
	install();
}