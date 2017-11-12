module.exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + " I Have Noticed You, Feel Proud!");

}

module.exports.help = {
    name: "notice"
}
