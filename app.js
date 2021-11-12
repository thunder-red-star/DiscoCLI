const Discord = require("djs-self");
const Chalk = require("chalk");
const config = require("./config/config.json")


const app = (() => {
	const client = new Discord.Client();
	require('./utils/eventloader.js')(client);

	client.login(config.token)
})

module.exports = {
	app: app
}