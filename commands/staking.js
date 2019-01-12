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
    description: "CryptoFightClub Staking.",
    fields: [
      {
        name: "CoinZone Discord Staking Pool",
        value: "You can check them out 👉 [HERE](https://discord.gg/2hjxvge) 👈"
      },
      {
        name: "StakingWorld",
        value: "You can check them out 👉 [HERE](https://staking.world/) 👈"
      },
      {
        name: "EcoStake",
        value: "You can check them out 👉 [HERE](https://ecostakepool.com) 👈"
      },
      {
        name: "CryptoStakes",
        value: "You can check them out 👉 [HERE](https://cryptostake.es?__wallets_faucet_ref=cacb4f9fd9c7afbe) 👈"
      },
      {
        name: "GoRain",
        value: "You can check them out 👉 [HERE](https://gorain.me/ref/158f3069a435b314a80bdcb024f8e422) 👈"
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
  name: 'staking',
  description: 'shows CFCCs staking pools.',
  usage: 'staking'
};

