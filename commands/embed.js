const Discord = module.require('discord.js');
var getJSON = require('get-json');

module.exports.run = async (bot, message, args) => {

  var embed = new Discord.RichEmbed()
      .addField("Test Title 1", "Test Description 1", true)
      .addField("Test Title 2", "Test Description 2", true)
      .addField("Test Title 3", "Test Description 3", true)
      .addField("Test Title 4", "Test Description 4")
      .setColor("0x#FF0000")
      .setFooter("THIS IS THE EMBED FOOTER")

  message.channel.send({embed: embed});
}

module.exports.help = {
    name: "embed"
}
