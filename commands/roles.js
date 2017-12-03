const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

  ROLEZZ = message.guild.roles.array()
  
    ROLEZZ.forEach(function(element){
      const ROLES = [
        element.name
      ];
      message.channel.send("```" + `${ROLES}` + "```");
    });

}

module.exports.help = {
    name: "roles"
}
