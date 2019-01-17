const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Bot Information")
        .setColor("#15f153")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Created On", bot.user.createdAt)
        .addField("Created by", bot.users.get("392082408050130945"))
        .addField("The servers bot is on:", bot.guilds.get("529006407144570905"))
        .addField("The servers bot is on:", bot.guilds.get("418569497495076865"));

        return message.channel.send(botembed);
}

module.exports.help = {
        name: "botinfo" 
}
