const Discord = module.require('discord.js');
var fortnite = require('fortnite');

module.exports.run = async (bot, message, args) => {

  fortnite(args[0], args[1]).then((data) => {
    var STAT = new Discord.RichEmbed()
    .setTitle("__***Fortnite Stats***__")
    .setURL(data.info.url)

    .addField("------------------------------------",
                       "Account Username: " + "__**" + data.info.username + "**__" + "\n" +
                       "Account Platform: " + "__**" + data.info.platform + "**__" + "\n" +
                       "------------------------------------\n" +
                       data.lifetimeStats[0].stat + ": " + "__**" + data.lifetimeStats[0].value + "**__" + "\n" +
                       data.lifetimeStats[1].stat + ": " + "__**" + data.lifetimeStats[1].value + "**__" + "\n" +
                       data.lifetimeStats[2].stat + ": " + "__**" + data.lifetimeStats[2].value + "**__" + "\n" +
                       data.lifetimeStats[3].stat + ": " + "__**" + data.lifetimeStats[3].value + "**__" + "\n" +
                       data.lifetimeStats[4].stat + ": " + "__**" + data.lifetimeStats[4].value + "**__" + "\n" +
                       data.lifetimeStats[5].stat + ": " + "__**" + data.lifetimeStats[5].value + "**__" + "\n" +
                       data.lifetimeStats[6].stat + ": " + "__**" + data.lifetimeStats[6].value + "**__" + "\n" +
                       data.lifetimeStats[7].stat + ": " + "__**" + data.lifetimeStats[7].value + "**__" + "\n" +
                       data.lifetimeStats[8].stat + ": " + "__**" + data.lifetimeStats[8].value + "**__" + "\n" +
                       data.lifetimeStats[9].stat + ": " + "__**" + data.lifetimeStats[9].value + "**__" + "\n" +
                       data.lifetimeStats[10].stat + ": " + "__**" + data.lifetimeStats[10].value + "**__" + "\n" +
                       data.lifetimeStats[11].stat + ": " + "__**" + data.lifetimeStats[11].value + "**__" + "\n" +
                       data.lifetimeStats[12].stat + ": " + "__**" + data.lifetimeStats[12].value + "**__" + "\n" +
                       "------------------------------------\n", true)

    .setColor("0x#FF0000")

    message.channel.send(STAT);

  }).catch(function(err) {
    message.channel.send(err);
  })
}

module.exports.help = {
    name: "fortnite"
}
