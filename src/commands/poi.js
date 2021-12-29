const Command = require("../structures/command.js");

module.exports = new Command({
    name: "poi",
    description: "Poi poi poi",

    async run(message, arguments, client) {
        
        message.reply("poi poi poi!");

    }
});