const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time

if(message.member.hasPermission("ADMINISTRATOR")) {
  message.channel.send("this is working Mr Developer!");
} else {
  return message.reply(":x: " + "| You need to have the \"ADMINISTRATOR\" Permission")
}
}

module.exports.help = {
    name: "dev"
}
