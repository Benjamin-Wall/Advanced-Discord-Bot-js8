const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {

  var comm1 = new Discord.RichEmbed()
  .addField("Commands (1/3):", "----------------------------------------------------------------------------------------------\n" +
                               "Type " + "__**" + prefix + "ping**__ to get a simple pong response\n" +
                               "Type " + "__**" + prefix + "fortnite [USERNAME] [pc/xbl/psn]**__ show stats of requested player\n" +
                               "Type " + "__**" + prefix + "speak [ANYTHING]**__ to show text entered as the bot\n" +
                               "Type " + "__**" + prefix + "coin**__ to flip a coin to get heads or tails \n" +
                               "Type " + "__**" + prefix + "8ball [QUESTION]**__ to get a random answer \n" +
                               "Type " + "__**" + prefix + "embed**__ to show a test version of a embed \n" +
                               "Type " + "__**" + prefix + "highlight [ANYTHING]**__ to show text entered with black background \n" +
                               "Type " + "__**" + prefix + "timer [1s/1m/1h]**__ to start a timer with the given amount of time \n" +
                               "Type " + "__**" + prefix + "notice**__ to get noticed by the bot \n" +
                               "Type " + "__**" + prefix + "play [YOUTUBE URL]**__ to play a song from YouTube \n" +
                               "Type " + "__**" + prefix + "playlist [YOUTUBE PLAYLIST URL]**__ to play a playlist from YouTube \n" +
                               "Type " + "__**" + prefix + "pause**__ to pause the currently playing song \n" +
                               "Type " + "__**" + prefix + "test**__ to get another embed type \n" +
                               "----------------------------------------------------------------------------------------------\n", true)

  .setColor("0x00FF00")

  var comm2 = new Discord.RichEmbed()
          .addField("Commands (2/3):", "----------------------------------------------------------------------------------------------\n" +
                                       "Type " + "__**" + prefix + "resume**__ to continue the currently paused song \n" +
                                       "Type " + "__**" + prefix + "skip**__ to play the next song in the queue \n" +
                                       "Type " + "__**" + prefix + "stop**__ to stop the currently playing song \n" +
                                       "Type " + "__**" + prefix + "crosshair**__ to get the Developers CS:GO Crosshair\n" +
                                       "Type " + "__**" + prefix + "viewmodel**__ to get the Developers CS:GO Viewmodel\n" +
                                       "Type " + "__**" + prefix + "invite**__ to get the perminent invite link for the server\n" +
                                       "Type " + "__**" + prefix + "userinfo [@NAME] **__ to show your profile info or mentioned info \n" +
                                       "Type " + "__**" + prefix + "images [SEARCH TERM]**__ to get a random image from google\n" +
                                       "Type " + "__**" + prefix + "memes**__ to get a random meme from reddit\n" +
                                       "Type " + "__**" + prefix + "float [INSPECT URL]**__ to get the float of the given inspect link\n" +
                                       "Type " + "__**" + prefix + "np**__ to get the currently playing song\n" +
                                       "Type " + "__**" + prefix + "csgo [STEAMID64/CUSTOM URL NAME]**__ show stats of requested player\n" +
                                       "Type " + "__**" + prefix + "rules**__ to show the rules of the server\n" +
                                       "----------------------------------------------------------------------------------------------\n", true)

          .setColor("0x00FF00")

  var comm3 = new Discord.RichEmbed()
          .addField("Commands (3/4):", "----------------------------------------------------------------------------------------------\n" +
                                       "Type " + "__**" + prefix + "roles**__ to see all the roles in the server \n" +
                                       "Type " + "__**" + prefix + "help**__ to show the main help page \n" +
                                       "Type " + "__**" + prefix + "commands**__ to see all the commands for this bot in the server \n" +
                                       "----------------------------------------------------------------------------------------------\n", true)

          .setColor("0x00FF00")

var comm4 = new Discord.RichEmbed()
  .addField("Admin Commands (4/4):", "----------------------------------------------------------------------------------------------\n" +
                                     "Type " + "__**" +  prefix + "dev**__ to get test if the bots working \n" +
                                     "Type " + "__**" +  prefix + "prefix [NEW PREFIX]**__ to change old prefix \n" +
                                     "Type " + "__**" +  prefix + "rename [NAME]**__ to rename to bot \n" +
                                     "Type " + "__**" +  prefix + "clear [NUMBER]**__ to delete a certain number of messages \n" +
                                     "Type " + "__**" +  prefix + "addrole [MENTION] [ROLE] [LENGTH]**__ to add a role to the mentioned \n" +
                                     "Type " + "__**" +  prefix + "removerole [MENTION] [ROLE]**__ to remove the person mentioned role\n" +
                                     "Type " + "__**" +  prefix + "kick [@NAME]**__ to kick the mentioned user \n" +
                                     "----------------------------------------------------------------------------------------------\n", true)



  .setColor("0x00FF00")

message.channel.send(comm1)
message.channel.send(comm2)
message.channel.send(comm3)
message.channel.send(comm4)

}

module.exports.help = {
    name: "commands"
}
