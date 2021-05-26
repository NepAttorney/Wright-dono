const Commando = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class BanCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "ban",
            group: "moderation",
            memberName: "ban",
            description: "Ban a member from the courtroom!",
            argsType: "multiple",
            clientPermissions: [
                "BAN_MEMBERS"
            ],
            userPermissions: [
                "BAN_MEMBERS"
            ],
            throttling: {
                usages: 2,
                duration: 5,
            }
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     * @param {String[]} args 
     */
    async run(message, args) {
        const member = message.mentions.users.first();
        const reason = args[1] || "None."
        if (member && member.id === this.client.user.id) {
            return message.channel.send("Hold it! You can't ban me!");
        }

        if (member) {
            let banTarget = message.guild.members.cache.get(member.id);
            banTarget.ban({
                reason
            });

            message.channel.send(
                new MessageEmbed()
                .setTitle("User has been banned!")
                .setColor("#ff0000")
                .setThumbnail(member.avatarURL({
                    size: 4096,
                    dynamic: true
                }))
                .setDescription(`${member.tag} has been banned from the courtroom!\nReason: ${reason}`)
                .setTimestamp()
            );
        } else {
            message.channel.send("No users mentioned.");
        }
    }
}