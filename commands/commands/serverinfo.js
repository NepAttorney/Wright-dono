const Commando = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class ServerinfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'serverinfo',
            group: 'commands',
            memberName: 'serverinfo',
            description: "Get some information about the server!",
            argsType: 'multiple'
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     */
    async run(message) {
        const { guild } = message

        const { name, region, memberCount, owner, id, createdAt } = guild
        const icon = guild.iconURL({
            dynamic: true,
            size: 4096
        })

        message.channel.send(
            new MessageEmbed()
            .setTitle(`Server info for ${name}`)
            .setThumbnail(icon)
            .addFields(
                {name: 'Owner', value: owner},
                {name: 'Server ID', value: id},
                {name: 'Region', value: region},
                {name: 'Members', value: memberCount},
                {name: 'Created At', value: createdAt.toLocaleString()}
            )
        )
    }
}