const Chalk = require('chalk');
const Discord = require("djs-self");

module.exports = async (client) => {
    Chalk.green(console.log("Logged in as " + client.username + "#" + client.discriminator + "!"))
};
