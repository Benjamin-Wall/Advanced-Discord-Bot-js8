# Advanced Discord Bot

From kicking and banning people to giving roles for specific amounts of time, this Discord bot can be helpful for anyone who wants to learn how to make
a discord.js bot, I made this so new users can also look at the methods used for certain commands and get some ideas for their Discord bot.

## Getting Started

* You will need [FFmpeg](https://www.ffmpeg.org/) for the play, stop and skip commands, as ytdl-core package needs ffmpeg or it will not work.
* Make a folder and git clone this repository: https://github.com/MrWall112/Advanced-Dicsord-Bot.git
* Then type "npm install" to get the needed packages for the bot
* in The Examples folder, the ConfigSammy, ConfigJack and ConfigBen, are not needed, i use the files and steam totp to get my 2FA Code for each account

## Commands

NOTE: ignore the [ ] that just shows what should be there when entering the command

```
speak [ANYTIHNG] - This will Make it look like the bot said whatever is put inside the []
coin - This will flip a coin that can either get heads or tales
8ball [QUESTION] - This will get a random answer for the question asked
embed - to show an example embed used for testing the positioning of the text
highlight [ANYTHING] This will make it look like the bot said whatever is in the []
timer [1s/1m/1h] - To start a timer for the given amount of time
invite - this is a basic embed made that shows the user the Perm invite i made then put in the code
notice - This is a basic command that shows how to reply to the person who used the command
play [YOUTUBE URL] - This can play a YouTube song, only 1 at a time
skip - This skips the current song and plays the next one
stop - This stops the currently playing song and disconnects the bot from the channel
userinfo [@NAME] - This shows the authors profile info, it will also show the mentioned persons info
images [SEARCH TERM] - This gets a random image everytime based upon the search results
memes - This gets a random meme from Reddit, but there is alot of duplicates
float [INSPECT URL] - This gets the float for the given inspect link
playlist [YOUTUBE URL ID] - Adds all the songs from the playlist to the queue
np - To get the currently playing song
pause - To pause the currently playing song
resume - To resume the currently paused song
fortnite [USERNAME] [pc/xbl/psn] - to get fortnite stats of the requested player
csgo [STEAMID64/CUSTOM STEAM URL] - to get certain csgo stats of the requested player
```

## Admin Commands:

NOTE: ignore the [ ] that just shows what should be there when entering the command

```
dev - This is just a simple reply to the user
prefix [NEW PREFIX] - This can change the bots prefix (locally)
rename [NAME] - This renames the bot to whatever "name" is
clear [NUMBER] - This purge deletes any amount of number of messages in a text channel
addrole [@NAME] [ROLE] [LENGTH] - This adds the role of the mentioned person for certain time
removerole [@NAME] [ROLE] - This removes the role mentioned from the person mentioned
kick [@NAME] - To kick the mentioned user from the server.
```

## TO DO:

* add more commands
* add more functionality

## Built With:

* [Discord.js](https://discord.js.org/#/) - The Discord Library
* [Node JS](https://nodejs.org/en/) - Java Script Framework

## Authors:

* **Ben Wall** - Main Coder
* **Alen Kalac** - Assistant Coder
* **James Broadberry** - Code Tester
