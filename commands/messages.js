const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, prefix, con) => {
  let target = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author;

  con.query(`SELECT * FROM messagecount WHERE id = '${target.id}'`, (err, rows) => {
    if(err) throw err;

    if(!rows[0]) return message.channel.send("This user has not sent any messages on record!");

    let msgCnt = rows[0].msgCnt

    var MSG = new Discord.RichEmbed()
    .setTitle("__***Total Message Count***__")

    .addField("------------------------------------------",
              "Total Ammount of messages: " + "__**" + msgCnt + "**__" + "\n" +
              "-----------------------------------------", true)

    .setColor("0x#FF0000")

    message.channel.send(MSG);

  });
}

module.exports.help = {
    name: "messages"
}
