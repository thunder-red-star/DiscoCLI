const fs = require("fs");

module.exports = class Install {
	static install () {
		fs.mkdirSync("./logs")
		fs.appendFileSync("./logs/messages.json", "{}");
		fs.appendFileSync("./logs/logins.json", "{}");
		fs.appendFileSync("./logs/deletes.json", "{}");
		fs.appendFileSync("./logs/config.json", "{}");
		fs.writeFileSync("./config/.installed", "");
	}
}