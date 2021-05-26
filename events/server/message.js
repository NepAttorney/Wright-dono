const Commando = require('discord.js-commando');
const Discord = require('discord.js');

/**
 * @param {Discord} Discord 
 * @param {Commando.CommandoClient} client 
 * @param {Commando.CommandoMessage} message 
 */
module.exports = async (Discord, client, message) => {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id)) {
        const pingedMessages = [
            "Objection!",
            "Hold it!",
            "Take that!",
            "You make a very good point.",
            "Is lava wet?",
            "The testimony... contradicts the evidence!",
            "Our bakery uses only the finest ingredients! Upper-crust goods for not much dough!"
        ]

        let pingedMessage = pingedMessages[Math.floor(Math.random() * pingedMessages.length)];

        message.channel.send(pingedMessage);
    }
}