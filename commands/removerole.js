const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time

if(message.member.hasPermission("ADMINISTRATOR")) {
  let member3 = message.mentions.members.first();
  if(!member3) return message.reply(":x: " + "| You need to mention a user/member!");

  let muteRole3 = message.guild.roles.find("name", args[1]);
  if(!muteRole3) return message.reply(":x: " + "| There is no such thing as a \"Muted\" role!");

  member3.removeRole(muteRole3.id);
  message.channel.send(member3 + ` you have lost the role: ` + args[1] + `!`);

  }else {
    return message.reply(":x: " + "| You need to have the \"ADMINISTRATOR\" Permission")
  };
}

module.exports.help = {
    name: "removerole"
}
