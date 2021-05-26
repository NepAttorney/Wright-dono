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

client.login(process.env.TOKEN);