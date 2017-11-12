const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time


      var test = new Discord.RichEmbed()
              .addField("MEMBER:", "ping\n" +
                                   "dev\n" +
                                   "coin\n" +
                                   "8ball\n" +
                                   "embed\n" +
                                   "notice\n" +
                                   "play\n" +
                                   "skip\n" +
                                   "stop\n" +
                                   "crosshair\n" +
                                   "viewmodel\n" +
                                   "help\n", true)

               .addField("ADMIN:", "prefix\n" +
                                   "rename\n" +
                                   "clean\n" +
                                   "kick\n", true)

              .setColor("0x#FF0000")
              .setFooter("FOR MORE INFO TYPE " + prefix + "help [COMMAND] FOR MORE INFO ON THE COMMAND")

                message.channel.send(test)

}

module.exports.help = {
    name: "test"
}
