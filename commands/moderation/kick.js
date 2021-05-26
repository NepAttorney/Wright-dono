const Commando = require('discord.js-commando');

module.exports = class KickCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: "kick",
            group: "moderation",
            memberName: 'kick',
            description: "Kick a member from the courtroom!",
            userPermissions: [
                "KICK_MEMBERS"
            ],
            clientPermissions: [
                "KICK_MEMBERS"
            ],
            throttling: {
                usages: 2,
                duration: 5
            }
        })
    }

    /**
     * @param {Commando.CommandoMessage} message 
     */
    async run(message) {
        const member = message.mentions.users.first();
        if(member && member.id === this.client.user.id) {
            return message.channel.send("Hold it! You can't kick me!");
        }
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();

            message.channel.send(`${memberTarget.user.tag} has been kicked from the courtroom!`);
        } else {
            message.channel.send("Can't find that member!");
        }
    }
}