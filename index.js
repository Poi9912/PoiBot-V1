console.clear();
require('dotenv').config();
const Client = require("./src/structures/client.js");
const Command = require("./src/structures/command.js");
const fs = require("fs");
const client = new Client();
const botToken = process.env.TOKEN;
const botPrefix = process.env.PREFIX;

fs.readdirSync("./src/commands")
    .filter(file => file.endsWith(".js"))
    .forEach(file => {
    /**
     * @type {Command}
     */

        const command = require(`./src/commands/${file}`);
        console.log(`Command ${command.name} loaded`);
        client.commands.set(Command.name, command);

});

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(botPrefix)) return;

    const arguments = message.content.substring(botPrefix.length).split(/ +/);

    const command = client.commands.find(cmd => cmd.name == arguments[0]);

    if (!command) return message.reply(`${arguments[0]} is not a valid command!`);

    command.run(message, arguments, client);

})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.login(botToken);