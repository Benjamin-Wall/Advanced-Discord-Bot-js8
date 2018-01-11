const Discord = module.require('discord.js');
var fortnite = require('fortnite');
var request = require('request');

module.exports.run = async (bot, message, args, prefix, con, file) => {

  var headers = {
    'TRN-Api-Key': file.FORTNITE_API_KEY
  }

  var options = {
    url: `https://api.fortnitetracker.com/v1/profile/` + `${args[1]}` + "/" + `${args[0]}`,
    method: 'GET',
    headers: headers
  }

  request(options, function (error, response, body) {
    var info = JSON.parse(body);

    message.channel.send("```" + "\n" +
                         "----------------------------------" + "\n" + 
                         "Account Username: " + info.epicUserHandle + "\n" +
                         "Account Platform: " + info.platformNameLong + "\n" +
                         "----------LIFETIME STATS----------" + "\n" + 
                         "K/d: " + info.lifeTimeStats[11].value + "\n" +
                         "Wins: " + info.lifeTimeStats[8].value + "\n" +
                         "Kills: " + info.lifeTimeStats[10].value + "\n" +
                         "Win %: " + info.lifeTimeStats[9].value + "\n" +
                         "Score: " + info.lifeTimeStats[6].value + "\n" +
                         "Top 3: " + info.lifeTimeStats[0].value + "\n" +
                         "Top 5: " + info.lifeTimeStats[3].value + "\n" +
                         "Top 12: " + info.lifeTimeStats[4].value + "\n" +
                         "Top 25: " + info.lifeTimeStats[5].value + "\n" +
                         "Time played: " + info.lifeTimeStats[13].value + "\n" +
                         "Kills Per Min: " + info.lifeTimeStats[12].value + "\n" +
                         "Matches Played: " + info.lifeTimeStats[7].value + "\n" +
                         "\n" +

                         "------------SOLO STATS------------" + "\n" +
                         "K/d: " + info.stats.p2.kd.value + "\n" +
                         "Wins: " + info.stats.p2.top1.value + "\n" +
                         "Kills: " + info.stats.p2.kills.value + "\n" +
                         "Win %: " + info.stats.p2.winRatio.value + "\n" +
                         "Score: " + info.stats.p2.score.value + "\n" +
                         "Top 10: " + info.stats.p2.top10.value + "\n" +
                         "Top 25: " + info.stats.p2.top25.value + "\n" +
                         "Time Played: " + info.stats.p2.minutesPlayed.displayValue + "\n" +
                         "Kills per min: " + info.stats.p2.kpm.value + "\n" +
                         "Kills per game: " + info.stats.p2.kpg.value + "\n" +
                         "Matches Played: " + info.stats.p2.matches.value + "\n" +
                         "\n" +

                         "------------DUO STATS-------------" + "\n" +
                         "K/d: " + info.stats.p10.kd.value + "\n" +
                         "Wins: " + info.stats.p10.top1.value + "\n" +
                         "Kills: " + info.stats.p10.kills.value + "\n" +
                         "Win %: " + info.stats.p10.winRatio.value + "\n" +
                         "Score: " + info.stats.p10.score.value + "\n" +
                         "Top 5: " + info.stats.p10.top5.value + "\n" +
                         "Top 12: " + info.stats.p10.top12.value + "\n" +
                         "Time Played: " + info.stats.p10.minutesPlayed.displayValue + "\n" +
                         "Kills per min: " + info.stats.p10.kpm.value + "\n" +
                         "Kills per game: " + info.stats.p10.kpg.value + "\n" +
                         "Matches Played: " + info.stats.p10.matches.value + "\n" +
                         "\n" +

                         "------------SQUAD STATS-----------" + "\n" +
                         "K/d: " + info.stats.p9.kd.value + "\n" +
                         "Wins: " + info.stats.p9.top1.value + "\n" +
                         "Kills: " + info.stats.p9.kills.value + "\n" +
                         "Win %: " + info.stats.p9.winRatio.value + "\n" +
                         "Score: " + info.stats.p9.score.value + "\n" +
                         "Top 3: " + info.stats.p9.top3.value + "\n" +
                         "Top 6: " + info.stats.p9.top6.value + "\n" +
                         "Time Played: " + info.stats.p9.minutesPlayed.displayValue + "\n" +
                         "Kills per min: " + info.stats.p9.kpm.value + "\n" +
                         "Kills per game: " + info.stats.p9.kpg.value + "\n" +
                         "Matches Played: " + info.stats.p9.matches.value + "\n" + "```")
})
}

module.exports.help = {
    name: "fortnite"
}
