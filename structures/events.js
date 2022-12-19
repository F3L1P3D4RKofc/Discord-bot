const fs = require('fs')

module.exports = async(bot) => {
    const path = fs.readdirSync('./events/').filter(x => x.endsWith('.js'))

    for(let file of path) {
        let pull = require(`../events/${file}`)

        pull.event = pull.event || file.replace('.js', '')
        bot.on(pull.event, pull.run.bind(null, bot))
    }
}