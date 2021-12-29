const Command = require("../structures/command.js");

module.exports = new Command({
    name: "ping",
    description: "Shows the ping of the bot",

    async run(message, arguments, client) {
        
        message.reply(`Ping: ${client.ws.ping}ms.`);

    }
});