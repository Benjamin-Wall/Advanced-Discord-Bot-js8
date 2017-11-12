const Discord = module.require('discord.js');

var cross = new Discord.RichEmbed()
         .addField("Crosshair:", "cl_crosshair_drawoutline \"0\" \n" +
                                "cl_crosshair_dynamic_maxdist_splitratio \"0.35\" \n" +
                                "cl_crosshair_dynamic_splitalpha_innermod \"1\" \n" +
                                "cl_crosshair_dynamic_splitalpha_outermod \"0.5\" \n" +
                                "cl_crosshair_dynamic_splitdist \"7\" \n" +
                                "cl_crosshair_outlinethickness \"1\" \n" +
                                "cl_crosshair_sniper_width \"1\" \n" +
                                "cl_crosshairalpha \"255\" \n" +
                                "cl_crosshaircolor \"1\" \n" +
                                "cl_crosshaircolor_b \"0\" \n" +
                                "cl_crosshaircolor_g \"0\" \n" +
                                "cl_crosshaircolor_r \"255\" \n" +
                                "cl_crosshairdot \"0\" \n" +
                                "cl_crosshairgap \"-3\" \n" +
                                "cl_crosshairgap_useweaponvalue \"0\" \n" +
                                "cl_crosshairscale \"0\" \n" +
                                "cl_crosshairsize \"2\" \n" +
                                "cl_crosshairstyle \"4\" \n" +
                                "cl_crosshairthickness \"1\" \n" +
                                "cl_crosshairusealpha \"1\" \n" +
                                "cl_fixedcrosshairgap \"-4.5\" \n", true)

         .addField("Copy Part 1:", "cl_crosshair_drawoutline 0; cl_crosshair_dynamic_maxdist_splitratio 0.35; cl_crosshair_dynamic_splitalpha_innermod 1; cl_crosshair_dynamic_splitalpha_outermod 0.5; cl_crosshair_dynamic_splitdist 7; cl_crosshair_outlinethickness 1", true)
         .addField("Copy Part 2:", "cl_crosshaircolor_r 255; cl_crosshairdot 0; cl_crosshairgap -3; cl_crosshairgap_useweaponvalue 0; cl_crosshairscale 0; cl_crosshairsize 2; cl_crosshairstyle 4; cl_crosshairthickness 1; cl_crosshairusealpha 1", true)
         .addField("Copy Part 3:", "cl_fixedcrosshairgap -4.5; cl_crosshair_sniper_width 1; cl_crosshairalpha 255; cl_crosshaircolor 1; cl_crosshaircolor_b 0; cl_crosshaircolor_g 0", true)

         .setColor("0x#FF0000")
         .setFooter("ENTER PART 1 INTO CONSOLE THEN PRESS ENTER, THEN ENTER PART 2 INTO CONSOLE THEN PRESS ENTER, THEN COPY AND PASTE PART 3 INTO CONSOLE AND PRESS ENTER!")


module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time

message.delete().then(() => {

  message.channel.send(cross)

  .then(function (message) {
                 message.react("viewmodel:358741579374264321").then(() => {
                   message.react("crosshair:358741278109859842").then(() => {
                     message.react("%E2%9D%93").then(() => {
                       message.react("%F0%9F%97%91")
                     })
                   })
                 })

              }).catch(function() {
               });
})
}

module.exports.help = {
    name: "crosshair"
}
