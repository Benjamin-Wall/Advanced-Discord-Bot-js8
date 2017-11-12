const Discord = module.require('discord.js');
var getJSON = require('get-json');

module.exports.run = async (bot, message, args) => {

  if(!args){
    return message.channel.send(":x: " + "| Please enter an inspect link for your awesome skin/weapon");
  }else{
    getJSON("https://api.csgofloat.com:1738/?url=" + args, function(error, data){

      if(data == undefined){
        return message.channel.send(":x: " + "| Please enter a valid inspect link for your awesome skin/weapon");
      }

      var float = new Discord.RichEmbed()
      .addField("Weapon Name: ", data.iteminfo.weapon_type, true)
      .addField("Weapon Skin Name: ", data.iteminfo.item_name, false)
      .addField("Float Value: ", data.iteminfo.floatvalue, true)
      .addField("Requested By: ", message.author.username)
      .setThumbnail(data.iteminfo.imageurl)

      .setColor("0x#FF0000")
      message.channel.send(float);
    })
  }
}

module.exports.help = {
    name: "float"
}
