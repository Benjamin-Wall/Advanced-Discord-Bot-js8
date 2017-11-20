const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, prefix, con) => {
  let target = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author;

  con.query(`SELECT * FROM xp WHERE id = '${target.id}'`, (err, rows) => {
    if(err) throw err;

    if(!rows[0]) return message.channel.send("This user has no XP on record!");

    let xp = rows[0].xp

    var XPEE = new Discord.RichEmbed()
    .setTitle("__***Total XP***__")

    .addField("------------------------------------------",
              "Total Ammount of XP: " + "__**" + xp + "**__" + "\n" +
              "-----------------------------------------", true)

    .setColor("0x#FF0000")

    message.channel.send(XPEE);
  });
}

module.exports.help = {
    name: "xp"
}
