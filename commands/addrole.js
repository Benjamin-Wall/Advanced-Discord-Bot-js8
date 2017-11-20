const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
            let member2 = message.mentions.members.first();
            if(!member2) return message.reply(":x: " + "| You need to mention a user/member!");

            let muteRole2 = message.mentions.roles.first();
            if(!muteRole2) return message.reply(":x: " + `| There is no such role!`);
            
            let time2 = args[2];
            if(!time2) {
              member2.addRole(muteRole2.id);
              message.channel.send(member2 + ` you have been given the permanent role: ` + muteRole2.name);
            }else {
              member2.addRole(muteRole2.id);
              message.channel.send(member2 + ` you have been given the role: ` + muteRole2.name + ` for: ${ms(ms(time2), {long: true})}`);

              setTimeout(function(){
                member2.removeRole(muteRole2.id);
                message.channel.send(member2 + ` you role has been taken off of you your glory lasted: ${ms(ms(time2), {long: true})}`)

              }, ms(time2));

              };
              }else {
                return message.reply(":x: " + "| You need to have the \"ADMINISTRATOR\" Permission")
              };
}

module.exports.help = {
    name: "addrole"
}
