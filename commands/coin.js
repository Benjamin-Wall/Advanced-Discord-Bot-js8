const Discord = module.require('discord.js');

var hd = [
    "Heads",
    "Tails"
];

module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time

  message.channel.send(message.author.toString() + " You Flipped: " + (hd[Math.floor(Math.random() * hd.length)]));
}

module.exports.help = {
    name: "coin"
}
