const Commando = require('discord.js-commando');

module.exports = class PresentCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "present",
            group: "attorney",
            memberName: "present",
            description: "Present some evidence towards a user/witness!",
            argsType: "multiple",
            format: "<@member> <text>",
            examples: [
                "w!present",
                "w!present @user"
            ]
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     * @param {String[]} args
     */
    async run(message, args) {
        const target = message.mentions.users.first();
        if (target) {
            args.shift()
            const evidence = args.join(" ")
            let member = message.guild.members.cache.get(target.id);

            message.channel.send(`**Take that!**\nYou presented ${evidence} to ${member}`);
        }
    }
}