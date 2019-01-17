const Discord = require('discord.js');


exports.run = (client, message, args) => {
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "CryptoFightClub",
    url: "https://cryptofightclubco.in",
    description: "CryptoFightClub Specs.",
    fields: [
      {
        name: "**__Ticker__**",
        value: "CFCC"
      },
      {
        name: "Algo",
        value: "SCRYPT"
      },
      {
        name: "Type",
        value: "Pos"
      },
      {
        name: "Max Supply",
        value: "5,600,000"
      },
      {
        name: "PoS Rewards",
        value: "85% per annum"
      },
      {
        name: "PoS Maturity Time",
        value: "8 Hours"
      },
      {
        name: "Confirmations",
        value: "2"
      },
      {
        name: "PreMine",
        value: "280,000 CFCC (1%)"
      },
      {
        name: "Block Time",
        value: "60 second"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© CryptoFightClub 2018-2019"
    }
  }
});
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'specs',
  description: 'shows CFCCs specs.',
  usage: 'specs'
};

