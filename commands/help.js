const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {

  message.delete().then(() => {
    let help = new Discord.RichEmbed()
            .addField("Help:", "----------------------------------------------------------------------------\n" +
                               "Type " + prefix + "commands to view all the commands \n" +
                               "Type " + prefix + "rules to view all the rules for the server \n" +
                               "Type " + prefix + "roles to view all the roles for the server \n" +
                               "----------------------------------------------------------------------------\n" +
                               "Click the bin reaction to delete this message \n" +
                               "----------------------------------------------------------------------------", true)

            .setColor("0x#FF0000")

    message.channel.send(help)

    .then(function (message) {
      message.react("%F0%9F%97%91")
    })
  })
}

module.exports.help = {
    name: "help"
}
