var settings = '../settingsConfig/settings.json';
var file = require(settings)
var memes = require('dankmemes');

module.exports.run = async (bot, message, args) => {
  var prefix = (file.prefix[message.guild.id] == undefined) ? file.prefix["default"] : file.prefix[message.guild.id];

  console.log(`${message.author.username}` + " " + "Used The Command " + prefix + "memes");
  memes('all', 100, function(err, data) {
    var rand = Math.floor(Math.random() * 100);
    var test = data[rand];
    message.channel.send(test);
  });

}

module.exports.help = {
    name: "memes"
}
