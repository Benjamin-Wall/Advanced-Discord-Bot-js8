const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

if(message.member.hasPermission("ADMINISTRATOR")) {
  let member3 = message.mentions.members.first();
  if(!member3) return message.reply(":x: " + "| You need to mention a user/member!");

  let muteRole3 = message.mentions.roles.first();
  if(!muteRole3) return message.reply(":x: " + `| There is no such thing as a \"${muteRole3.name}\" role!`);

  member3.removeRole(muteRole3.id);
  message.channel.send(member3 + ` you have lost the role: ` + muteRole3.name + `!`);

  }else {
    return message.reply(":x: " + "| You need to have the \"ADMINISTRATOR\" Permission")
  };
}

module.exports.help = {
    name: "removerole"
}
