console.clear()
require("dotenv").config();
const Discord = require("discord.js")
const botToken = process.env.TOKEN
const botSubfix = process.env.SUBFIX

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("messageCreate", (message) => {
    if (message.content  == `${botSubfix}poi`){
        message.reply("Poi poi poi")
    }
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.login(botToken)