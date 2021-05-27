const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const path = require('path');

require('dotenv').config();

const client = new Commando.CommandoClient({
    owner: '428288065115783172',
    commandPrefix: process.env.PREFIX,
    partials: ["MESSAGE", "REACTION", "CHANNEL"],
    
});

client.events = new Discord.Collection();

require('./handlers/event_handler')(client, Discord);

client.once('ready', async () => {
    client.user.setActivity("the witness's testimony", { type: "LISTENING" });

    client.registry
        .registerDefaultTypes()
        .registerGroups([
            ["commands", "Bot Commands"],
            ["moderation", "Moderation Commands"],
            ["attorney", "Ace Attorney Commands"]
        ])
        .registerDefaultGroups()
        .registerDefaultCommands({
            commandState: false,
            eval: false,
            prefix: false,
            unknownCommand: false
        })
        .registerCommandsIn(path.join(__dirname, "commands"));
});


const logChannel = '847449922532802561'

client.on('guildCreate', (guild) => {
    client.channels.cache.get(logChannel).send(
        new Discord.MessageEmbed()
            .setTitle(`I joined a new server!`)
            .setThumbnail(guild.iconURL({
                size: 4096,
                dynamic: true
            }))
            .addFields(
                {name: "Server Name", value: `${guild.name}`},
                {name: "Server ID", value: `${guild.id}`},
                {name: "Owner Name", value: `${guild.owner}`},
                {name: "Owner ID", value: `${guild.owner.id}`},
                {name: "Member Count", value: `${guild.memberCount}`}
            )
            .setFooter(`Currently in ${client.guilds.cache.size} servers!`)
            .setTimestamp()
            .setColor('#ff97e0')
    );
});

client.on('guildDelete', (guild) => {
    client.channels.cache.get(logChannel).send(
        new Discord.MessageEmbed()
            .setTitle(`I got removed from a server!`)
            .setThumbnail(guild.iconURL({
                size: 4096,
                dynamic: true
            }))
            .addFields(
                {name: "Server Name", value: `${guild.name}`},
                {name: "Server ID", value: `${guild.id}`},
                {name: "Owner Name", value: `${guild.owner}`},
                {name: "Owner ID", value: `${guild.owner.id}`},
                {name: "Member Count", value: `${guild.memberCount}`}
            )
            .setFooter(`Currently in ${client.guilds.cache.size} servers!`)
            .setTimestamp()
            .setColor('RED')
    );
});

client.login(process.env.TOKEN);