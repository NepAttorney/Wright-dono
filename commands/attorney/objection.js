const Commando = require('discord.js-commando');

module.exports = class ObjectionCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "objection",
            group: "attorney",
            memberName: "objection",
            description: "Shout objection!",
            aliases: ["object"],
            format: "<@user>",
            examples: [
                "w!objection",
                "w!objection @user"
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

            message.channel.send(`${message.author.username} shouted **objection!** towards ${member.user.username}`)
        } else {
            message.channel.send(`${message.author.username} shouted **objection!**`);
        }
    }
}