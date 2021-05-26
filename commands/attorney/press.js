const Commando = require('discord.js-commando');

module.exports = class PressCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "press",
            group: "attorney",
            memberName: "press",
            description: "Press a member/witness for more information!",
            format: "<@user>",
            examples: [
                "w!press",
                "w!press @user"
            ]
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     */
    async run(message) {
        const target = message.mentions.users.first();
        if (target) {
            let member = message.guild.members.cache.get(target.id);

            message.channel.send(`**Hold it!**\nYou pressed ${member} for more information!`);
        }
    }
}