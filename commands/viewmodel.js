const Discord = module.require('discord.js');

var view = new Discord.RichEmbed()
        .addField("Viewmodel:", "viewmodel_fov \"68\" \n" +
                               "viewmodel_offset_x \"2.500000\" \n" +
                               "viewmodel_offset_y \"2.0\" \n" +
                               "viewmodel_offset_z \"-2.000000\" \n" +
                               "viewmodel_presetpos \"0\" \n", true)

        .addField("Copy & Paste:", "viewmodel_fov 68; viewmodel_offset_x 2.500000; viewmodel_offset_y 2.0; viewmodel_offset_z -2.000000; viewmodel_presetpos 0", true)

        .setColor("0x#FF0000")
        .setFooter("COPY AND PASTE THE LINE OF COMMANDS INTO CONSOLE AND HIT ENTER TO GET BENS VIEWMODEL!")

module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time

message.delete().then(() => {

  message.channel.send(view)

  .then(function (message) {
                 message.react("viewmodel:358741579374264321").then(() => {
                   message.react("crosshair:358741278109859842").then(() => {
                       message.react("%F0%9F%97%91")
                   })
                 })
              }).catch(function() {
               });
})
}

module.exports.help = {
    name: "viewmodel"
}
