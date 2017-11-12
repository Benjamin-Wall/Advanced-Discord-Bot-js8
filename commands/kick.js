module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time

if(!message.member.hasPermission("ADMINISTRATOR")){
  return message.reply(":x: " + "| You Need The \"ADMIN\" role to kick people").catch(console.error);
}
if (message.mentions.users.size === 0){
  return message.reply(":x: " + "| Please Mention A User To Kick Next Time").catch(console.error);
}
let kickmember = message.guild.member(message.mentions.users.first());
if(!kickmember){
  message.reply(":x: " + "| That User Does Not Seem Valid!");
}
if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
  return message.reply(":x: " + "| i need the \"KICK_MEMBERS\" permission!").catch(console.error);
}
kickmember.kick().then(member => {
  message.reply(`${member.user.username} was succesfully kicked`).catch(console.error);
}).catch(console.error)

}

module.exports.help = {
    name: "kick"
}
