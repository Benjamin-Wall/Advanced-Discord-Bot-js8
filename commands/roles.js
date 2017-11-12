const Discord = module.require('discord.js');

var role = new Discord.RichEmbed()
        .addField("Role Hierarchy", "-------------------------------------------------------------------------------------------------\n" +
                                    "__**Admin:**__ Highest Ranking Person On The Server always respect them or be penalized! \n" +
                                    "__**Bots:**__ These Are All of the bots on this server \n" +
                                    "__**Members:**__ Lowest Ranking person on the server, they have basic permissions and cannot access admin chanels \n" +
                                    "-------------------------------------------------------------------------------------------------\n", true)

        .setColor("0x#FF0000")


module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time


message.delete().then(() => {

  message.channel.send(role)

    .then(function (message) {
      message.react("%F0%9F%97%91")

    })
  })

}

module.exports.help = {
    name: "roles"
}
