module.exports.run = async(bot, msg) => {
    if(msg.author.bot) return;
    if(!msg.content.startsWith(process.env.prefix)) return;

    const args = msg.content.slice(process.env.prefix.length).trim().split(/ +/g),
        cmd = args.shift().toLowerCase(),
        command = bot.cmds.get(cmd);
    if(!command) command = bot.cmds.get(bot.aliases.get(cmd))
    if(!command) return;

    command.run(bot, args, msg)
}