module.exports = async (bot) => {
    const { REST, Routes } = require('discord.js'),
        fs = require('fs'),
        commands = [],
        path = fs.readdirSync('./slash/').filter(x => x.endsWith('.js'));

    for (let file of path) {
        const pull = require('../slash/' + file);
        bot.slashCmds.set(pull.data.name, pull);
        commands.push(pull.data);
    };
    
    const rest = new REST({ version: '10' }).setToken(process.env.token);

    (async () => {
        try {
            console.log('Started refreshing application (/) commands.');

            await rest.put(Routes.applicationCommands(process.env.id), { body: commands });

            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    })();
}