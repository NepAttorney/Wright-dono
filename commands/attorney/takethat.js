const Commando = require('discord.js-commando');

module.exports = class TakeThatCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "takethat",
            group: "attorney",
            memberName: "takethat",
            description: "Shout take that!",
            format: "<@user>",
            examples: [
                "w!takethat",
                "w!takethat @user"
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

            message.channel.send(`${message.author.username} shouted **take that!** towards ${member.user.username}`);
        } else {
            message.channel.send(`${message.author.username} shouted **take that!**`);
        }
    }
}