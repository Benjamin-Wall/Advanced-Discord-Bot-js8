var settings = '../settingsConfig/settings.json';
var file = require(settings)
const GoogleImages = require('google-images');

module.exports.run = async (bot, message, args) => {
  var prefix = (file.prefix[message.guild.id] == undefined) ? file.prefix["default"] : file.prefix[message.guild.id];

  const client = new GoogleImages(file.CSE, file.API);
    var search = client.search(args.join(" ")).then(function(images) {
      message.channel.send(images[Math.floor(Math.random() * images.length)].url);
      });

}

module.exports.help = {
    name: "images"
}
