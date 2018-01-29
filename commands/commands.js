const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args, prefix) => {


  message.channel.send("```" + "\n" +
                       "Type " + prefix + "ping to get a simple pong response\n" +
                       "Type " + prefix + "fortnite [USERNAME] [pc/xbl/psn] show stats of requested player\n" +
                       "Type " + prefix + "speak [ANYTHING] to show text entered as the bot\n" +
                       "Type " + prefix + "coin to flip a coin to get heads or tails \n" +
                       "Type " + prefix + "8ball [QUESTION] to get a random answer \n" +
                       "Type " + prefix + "embed to show a test version of a embed \n" +
                       "Type " + prefix + "highlight [ANYTHING] to show text entered with black background \n" +
                       "Type " + prefix + "timer [1s/1m/1h] to start a timer with the given amount of time \n" +
                       "Type " + prefix + "notice to get noticed by the bot \n" +
                       "Type " + prefix + "play [YOUTUBE URL] to play a song from YouTube \n" +
                       "Type " + prefix + "playlist [YOUTUBE PLAYLIST URL] to play a playlist from YouTube \n" +
                       "Type " + prefix + "pause to pause the currently playing song \n" +
                       "Type " + prefix + "test to get another embed type \n" +
                       "Type " + prefix + "resume to continue the currently paused song \n" +
                       "Type " + prefix + "skip to play the next song in the queue \n" +
                       "Type " + prefix + "stop to stop the currently playing song \n" +
                       "Type " + prefix + "code to get steam auth codes [BEN AND SAMMY ONLY] \n" +
                       "Type " + prefix + "love [ANYTHING] to see if you love what was entered in [] \n" +
                       "Type " + prefix + "fuckoff to instantly make the bot leave the voice channel \n" +
                       "Type " + prefix + "number [min] [max] to get a random number between min and max \n" +
                       "Type " + prefix + "crosshair to get the Developers CS:GO Crosshair\n" + "```");

message.channel.send("```" + "\n" +
                     "Type " + prefix + "viewmodel to get the Developers CS:GO Viewmodel\n" +
                     "Type " + prefix + "invite to get the perminent invite link for the server\n" +
                     "Type " + prefix + "userinfo [@NAME]  to show your profile info or mentioned info \n" +
                     "Type " + prefix + "images [SEARCH TERM] to get a random image from google\n" +
                     "Type " + prefix + "memes to get a random meme from reddit\n" +
                     "Type " + prefix + "float [INSPECT URL] to get the float of the given inspect link\n" +
                     "Type " + prefix + "np to get the currently playing song\n" +
                     "Type " + prefix + "csgo [STEAMID64/CUSTOM URL NAME] show stats of requested player\n" +
                     "Type " + prefix + "rules to show the rules of the server\n" +
                     "Type " + prefix + "roles to see all the roles in the server \n" +
                     "Type " + prefix + "help to show the main help page \n" +
                     "Type " + prefix + "commands to see all the commands for this bot in the server \n" +
                     "Type " + prefix + "xp to see you or the mentioned persons total XP \n" +
                     "Type " + prefix + "avatar to see you or the mentioned persons avatar \n" +
                     "Type " + prefix + "messages to see you or the mentioned persons message count \n" +
                     "Type " + prefix + "dadjoke to randomly get a awful dad joke\n" +
                     "Type " +  prefix + "dev to get test if the bots working \n" +
                     "Type " +  prefix + "prefix [NEW PREFIX] to change old prefix \n" +
                     "Type " +  prefix + "rename [NAME] to rename to bot \n" +
                     "Type " +  prefix + "clear [NUMBER] to delete a certain number of messages \n" +
                     "Type " +  prefix + "addrole [MENTION] [ROLE] [LENGTH] to add a role to the mentioned \n" +
                     "Type " +  prefix + "removerole [MENTION] [ROLE] to remove the person mentioned role\n" +
                     "Type " +  prefix + "kick [@NAME] to kick the mentioned user \n" + "```");

}

module.exports.help = {
    name: "commands"
}
