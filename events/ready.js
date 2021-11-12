const chalk = require('chalk');
const Discord = require("djs-self");

module.exports = async (client) => {
    Chalk.green("Logged in as " + client.username + "#" + client.discriminator + "!")
};
