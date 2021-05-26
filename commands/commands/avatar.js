const Commando = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AvatarCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "avatar",
            group: 'commands',
            memberName: "avatar",
            description: "Get your avatar or someone elses!",
            aliases: ["pfp"],
            format: "<@user>",
            examples: [
                "w!avatar",
                "w!avatar @user"
            ]
        }) 
    }

    /**
     * @param {Commando.CommandoMessage} message 
     */
    async run(message) {
        let member = message.mentions.users.first() || message.author;

        let avatar = member.displayAvatarURL({
            dynamic: true,
            size: 4096
        });

        message.channel.send(
            new MessageEmbed()
            .setColor('#327eeb')
            .setTitle(member.tag)
            .setImage(avatar)
        )
    }
}