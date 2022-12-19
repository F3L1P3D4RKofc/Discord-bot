module.exports = {
    name: 'ping',
    description: 'Veja a velocidade do bot!',
    run: async(bot, args, msg) => {
        msg.reply(`> ${bot.ws.ping}ms!\n:ping_pong: Pong`)
    }
}
