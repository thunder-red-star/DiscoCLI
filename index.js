const fs = require("fs");
const Chalk = require("chalk");
const { install } = require("./install.js")
const { app } = require("./app.js")

const not_installed_message = "Installation has not occurred yet. Commencing the installation process.";

if (!fs.existsSync("./config/.installed")) {
	console.log(not_installed_message)
	install();
}
app();