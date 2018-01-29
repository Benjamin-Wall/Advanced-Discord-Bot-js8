const Discord = module.require('discord.js');

var Responses = [
    "yes",
    "no",
    "maybe",
    "dont know, try again",
    "Of course no, try again maybe",
    "i mean, i guess so",
    "if you say so",
    "im not saying anything but you know the answer",
    "definately not",
    "its a possibility",
    "a huge chance",
    "a small chance",
    "you better hope so",
    "you better not hope so"
];

module.exports.run = async (bot, message, args) => {

    if(!args[0]){
        return message.channel.send(":x: " + "| Please Enter A person/object")
    }

    if (args[0]) {
        message.channel.send(Responses[Math.floor(Math.random() * Responses.length)]);
    }

}
module.exports.help = {
    name: "love"
}
