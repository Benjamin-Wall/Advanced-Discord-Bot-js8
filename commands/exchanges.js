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
    description: "CryptoFightClub Exchanges.",
    fields: [
      {
        name: "Bitsahani",
        value: "You can check it 👉 [HERE](https://bitsahani.com/BTC/CFCC) 👈"
      },
      {
        name: "IrCrex",
        value: "You can check it 👉 [HERE](https://ircex.com/markets/cfccgcn) 👈"
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
  name: 'exchanges',
  description: 'shows CFCCs exchanges.',
  usage: 'exchanges'
};

