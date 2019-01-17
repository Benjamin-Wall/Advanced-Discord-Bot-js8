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
    description: "CryptoFightClub Wallets.",
    fields: [
      {
        name: "Windows",
        value: "You can get it 👉 [HERE](https://github.com/frodriguez2010/CFCC-v1.5/blob/master/cryptofightclub-qt-windows.zip) 👈"
      },
      {
        name: "Linux Daemon",
        value: "You can get it 👉 [HERE](https://github.com/frodriguez2010/CFCC-v1.5/blob/master/cryptofightclub-daemon-linux.tar.gz) 👈"
      },
      {
        name: "Linux QT",
        value: "You can get it 👉 [HERE](https://github.com/frodriguez2010/CFCC-v1.5/blob/master/cryptofightclub-qt-linux.tar.gz) 👈"
      },
      {
        name: "Mac",
        value: "You can get it 👉 [HERE](https://mega.nz/#!nNJCVQ4C!dmQz1J8RDz4GWa8DhtvNi5gOFtqElI4mSZyRC32-O3c) 👈"
      },
      {
        name: "Android",
        value: "You can get it 👉 [HERE](https://drive.google.com/open?id=14nC0LK6d59-91NCMRbZrOHRXsjYgsVGi) 👈"
      },
      {
        name: "Web",
        value: "You can check it 👉 [HERE](https://www.cryptofightclubcoin.com) 👈"
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
  name: 'wallets',
  description: 'shows CFCCs wallets.',
  usage: 'wallets'
};

