const Commando = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const { version } = require('../../package');

module.exports = class InfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "info",
            group: "commands",
            memberName: "info",
            description: "Learn more about me!"
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     */
    async run(message) {
        const roleColor =
            message.guild.me.displayHexColor === "#000000"
            ? "#ffffff"
            : message.guild.me.displayHexColor;

        let totalMembers = 0

        for (const guild of this.client.guilds.cache) {
            totalMembers += (await guild[1].members.fetch()).size
        }

        message.channel.send(
            new MessageEmbed()
            .setColor(roleColor)
            .setTitle("Bot Info")
            .setThumbnail(this.client.user.avatarURL({
                format: "png",
                size: 4096
            }))
            .setDescription("My name is Phoenix Wright.")
            .addFields(
                {name: "Name", value: this.client.user.username},
                {name: "Created By", value: "HamoodyTheWolf#7257"},
                {name: "Version", value: version},
                {name: "Server Count", value: this.client.guilds.cache.size},
                {name: "Total Members", value: totalMembers}
            )
        )
    }
}