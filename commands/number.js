const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

        let min = parseInt(args[0]);
        let max = parseInt(args[1]);

        if(min > max){
            let temp = max;
            max = min;
            min = temp;
        }

        var Result = Math.floor(Math.random() * (max - min + 1)) + min;

        if(isNaN(Result)){
            return message.channel.send("Please enter a min and a max number")
        }else{
            message.channel.send(Result);
        }
      
}

module.exports.help = {
    name: "number"
}
