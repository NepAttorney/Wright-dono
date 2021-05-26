const Commando = require('discord.js-commando');

module.exports = class SayCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "say",
            group: "commands",
            memberName: "say",
            description: "Make me say something!",
            argsType: "multiple"
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        let messageArgs = args.join(" ");

        message.channel.send(messageArgs);
    }
}