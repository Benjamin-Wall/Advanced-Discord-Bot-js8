const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

  ROLEZZ = message.guild.roles.array()
  
  const ROLES = [];

    ROLEZZ.forEach(function(element){
        ROLES.push(element.name + "\n")
    });
    message.channel.send("```" + `${ROLES}` + "```");

}

module.exports.help = {
    name: "roles"
}
