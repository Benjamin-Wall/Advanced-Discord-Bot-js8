const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("What the bot can do")
        .setColor("#15f153")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("What can this bot do", "this bot can do lots")
	.addField("Moderation", "kick, ban, warn, tempmute, addrole, removerole")
	.addField("Fun", "8ball, levels, coins, random dog pics, random cat pics")
	.addField("Economy", "gives coin at random intervals no value yet")
	.addField("Logs", "logs reports, warnings, kicks, bans")
	.addField("Other", "shows users who join, leave.. shows when channel is created, deleted..")
        .addField("Created by", bot.users.get("392082408050130945"));

        return message.channel.send(botembed);
}

module.exports.help = {
        name: "about" 
}
