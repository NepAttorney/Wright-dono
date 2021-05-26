const Commando = require('discord.js-commando');

module.exports = class HoldItCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "holdit",
            group: "attorney",
            memberName: "holdit",
            description: "Shout hold it!",
            format: "<@user>",
            examples: [
                "w!holdit",
                "w!holdit @user"
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

            message.channel.send(`${message.author.username} shouted **hold it!** towards ${member.user.username}`);
        } else {
            message.channel.send(`${message.author.username} shouted **hold it!**`);
        }
    }
}