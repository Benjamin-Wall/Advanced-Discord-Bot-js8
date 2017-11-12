var settings = '../settingsConfig/settings.json';
var file = require(settings)

module.exports.run = async (bot, message, args) => {
  var prefix = (file.prefix[message.guild.id] == undefined) ? file.prefix["default"] : file.prefix[message.guild.id];

  console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "ping");

  message.channel.send(message.author.toString() + " " + "Pong!");

}

module.exports.help = {
    name: "ping"
}
