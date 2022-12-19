const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Veja minha velocidade'),
    run: async(bot, int) => {
        int.reply(`> ${bot.ws.ping}ms!\n:ping_pong: Pong`)
    }
}
