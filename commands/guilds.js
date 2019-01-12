const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
        // Lets define our array of guilds
        const guildArray = client.guilds.map((guild) => {
        return `Server: ${guild.name}`
        })
      
        // And send it
        message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
      }
    
    module.exports.help = {
        name: "guilds"
    }