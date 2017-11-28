# Advanced Discord Bot

From kicking and banning people to giving roles for specific amounts of time, this Discord bot can be helpful for anyone who wants to learn how to make
a discord.js bot, I made this so new users can also look at the methods used for certain commands and get some ideas for their Discord bot.

## Getting Started

* You will need [FFmpeg](https://www.ffmpeg.org/) for the play, stop and skip commands, as ytdl-core package needs ffmpeg or it will not work.
* Make a folder and git clone this repository: https://github.com/MrWall112/Advanced-Discord-Bot-js8.git
* Then type "npm install" to get the needed packages for the bot
* in The Examples folder, the ConfigSammy, ConfigJack and ConfigBen, are not needed, i use the files and steam totp to get my 2FA Code for each account

## Commands

NOTE: ignore the [ ] that just shows what should be there when entering the command

```
ping - to get a simple pong response
memes - This gets a random meme from Reddit, but there is alot of duplicates
images [SEARCH TERM] - This gets a random image everytime based upon the search results
codes - gets my steam authenticator codes you can get your if you know how to
userinfo [@NAME] - This shows the authors profile info, it will also show the mentioned persons info
float [INSPECT URL] - This gets the float for the given inspect link
invite - this is a basic embed made that shows the user the Perm invite i made then put in the code
timer [1s/1m/1h] - To start a timer for the given amount of time
coin - This will flip a coin that can either get heads or tales
8ball [QUESTION] - This will get a random answer for the question asked
embed - to show an example embed used for testing the positioning of the text
notice - This is a basic command that shows how to reply to the person who used the command
highlight [ANYTHING] This will make it look like the bot said
speak [ANYTIHNG] - This will Make it look like the bot said 
crosshair - a simple embed that i put my CS:GO crosshair settings into
test - this shows an example embed that shows collums vertically
commands - this will show all the available commands to use for the bot
rules - this shows the rules of the server
roles - shows the roles of the server
viewmodel - a simple embed that i put my CS:GO viewmodel settings into
help - this will show help from the bot
fortnite [USERNAME] [pc/xbl/psn] - to get fortnite stats of the requested player
csgo [STEAMID64/CUSTOM STEAM URL] - to get certain csgo stats of the requested player
avatar [MENTION] - gets the profile pic of the mentioned person if noone is mentiond it gets the authors
xp [@NAME] - this shows the users current XP ammount or the authors if not mentioned
messages [@NAME] - this shows the users current messages sent or the authors if not mentioned
dadjoke - get a random awful dad joke that will make you cringe
```

## Inside Index.js Commands:

NOTE: ignore the [ ] that just shows what should be there when entering the command

```
play [YOUTUBE URL] - This adds and plays the youtube video in discord
playlist [YOUTUBE URL] - This plays a youtube playlist in discord
prefix [NEW PREFIX] - This changes the prefix for the server
np - This shows the currently playing song
stop - This instantly stops and disconnects the bot
fuckoff - This instantly stops and disconnects the bot
skip - this skips the currently playing song
```

## Admin Commands:

NOTE: ignore the [ ] that just shows what should be there when entering the command

```
addrole [@NAME] [ROLE] [LENGTH] - This adds the role of the mentioned person for certain time
removerole [@NAME] [ROLE] - This removes the role mentioned from the person mentioned
dev - This is just a simple reply to the user
rename [NAME] - This renames the bot to whatever "name" is
kick [@NAME] - To kick the mentioned user from the server.
clear [NUMBER] - This purge deletes any amount of number of messages in a text channel
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
