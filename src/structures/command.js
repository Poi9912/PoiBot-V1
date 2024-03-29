const Client = require("./client.js");

const Discord = require("discord.js");

/**
 * @param {Discord.Message | Discord.Interaction} message
 * @param {string[]} arguments
 * @param {Client} client
 */

function RunFunction(message, arguments, client) {}

class Command {

    /**
     * @typedef {{name: string, description: string, run: RunFunction}} CommandOptions
     * @param {CommandOptions} options
     */

    constructor(options){

        


        this.name = options.name;
        this.description = options.description;
        this.run = options.run;
    }
}

module.exports = Command;