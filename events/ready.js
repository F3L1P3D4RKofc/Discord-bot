module.exports.run = async(bot) => {
    console.log(`Logado no bot: ${bot.user.tag}`);
    bot.user.setActivity({ name: `${bot.guilds.cache.size} Servidores!`, type: 2})
    bot.user.setStatus('dnd')
}