require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js'),
    bot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

bot.slashCmds = new Collection();
bot.cmds = new Collection();
bot.aliases = new Collection();

for (let x of ['slash', 'events', 'cmds']) require('./structures/' + x)(bot);

bot.login(process.env.token)