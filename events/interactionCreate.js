module.exports.run = async(bot, int) => {
    if (!int.isChatInputCommand()) return;

    const command = bot.slashCmds.get(int.commandName)
    if(!command) return;

    command.run(bot, int)
}
