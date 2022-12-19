const fs = require('fs')

module.exports = async(bot) => {
    fs.readdirSync('./cmd').forEach(dir => {
        const path = fs.readdirSync(`./cmd/${dir}`).filter(x => x.endsWith('.js'))

        for (let file of path) {
            const pull = require(`../cmd/${dir}/${file}`)

            bot.cmds.set(pull.name, pull)
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name));
        }
    })
}
