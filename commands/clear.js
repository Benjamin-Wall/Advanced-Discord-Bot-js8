module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time

if(message.member.hasPermission("ADMINISTRATOR")) {
  let messagecount = parseInt(args[0]);

  if(isNaN(messagecount)) return message.channel.send(":x: " + "| Please Enter A Numeric Value!");

  if(messagecount > 100){
    message.channel.send(":x: " + "| Sorry, You can only clean upto 100 messages at a time!")
  }else if(messagecount < 2 ) {
    message.channel.send(":x: " + "| Sorry, You can only clean upto 100 messages at a time!")
  } else {

  }{
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages, true));
  }
} else {
  return message.reply(":x: " + "| You need to have the \"ADMINISTRATOR\" Permission")
}
}

module.exports.help = {
    name: "clear"
}
