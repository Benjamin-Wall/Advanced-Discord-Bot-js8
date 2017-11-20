var settings = '../settingsConfig/settings.json';
var file = module.require(settings)
const SteamTotp = module.require('steam-totp');
const Discord = module.require('discord.js');
const ms = require('ms');

const configS = module.require('../settingsConfig/ConfigSammy.json');
const configJ = module.require('../settingsConfig/ConfigJack.json');
const configB = module.require('../settingsConfig/ConfigBen.json');

module.exports.run = async (bot, message, args) => {
        var JackCode = SteamTotp.getAuthCode(configJ.sharedSecret);
        var BenCode = SteamTotp.getAuthCode(configB.sharedSecret);
        var SammyCode = SteamTotp.getAuthCode(configS.sharedSecret);

        let codess = new Discord.RichEmbed()
            .addField("__**Bens Code:**__", BenCode)
            .addField("__**Jacks Code:**__", JackCode)
            .addField("__**Sammys Code:**__", SammyCode)
            .setColor(0x00FF00)

            if(message.author.id === "103509994074312704" || message.author.id === "366979278237204491") {
                message.channel.send({embed: codess});
              }else{
                message.channel.send("You need to ben or sammy");
              }
        
            setTimeout(function(){
                message.channel.fetchMessages({limit: 2}).then(messages => message.channel.bulkDelete(messages, true));
    
            }, ms("10s"));
}

module.exports.help = {
    name: "codes"
}
