module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time

message.delete();

if(!args.join(" ")){
  return message.channel.send(":x: " + "| Please Enter Something For The Bot To Say")
}
message.channel.send(args.join(" "));
}

module.exports.help = {
    name: "speak"
}
