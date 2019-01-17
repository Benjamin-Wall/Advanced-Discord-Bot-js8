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
    description: "CryptoFightClub info & links.",
    fields: [
      {
        name: "**__Staking Pools__**",
        value: "type `-staking` to get a list of our staking pools"
      },
      {
        name: "**__Wallets__**",
        value: "type `-wallets` to get a list of our wallets"
      },
      
      {
        name: "**__Specifications__**",
        value: "type `-specs` to get a list of our coin specs"
      },
      
      {
        name: "BitcoinTalkThread",
        value: "[BitcoinTalkThread](https://bitcointalk.org/index.php?topic=5065564.new#new)"
      },
      
      {
        name: "Faucet",
        value: "[Faucet](https://cfccfaucet.com/)"
      },
      
      {
        name: "Block Explorer",
        value: "[Block Explorer](https://blockexplorer.cryptofightclubco.in)"
      },
      
      {
        name: "GitHub",
        value: "[GitHub Repo](https://github.com/frodriguez2010/CFCC-v1.5)"
      },
      
      {
        name: "WhitePaper",
        value: "[WhitePaper](https://www.dropbox.com/s/yzfuppsmurxabni/CryptoFightClub%20Whitepaper%20.pdf?dl=0)"
      },
      
      {
        name: "Discord",
        value: "[Discord](https://discord.gg/KupRdUh)"
      },
      
      {
        name: "Price Trackers",
        value: "You can check out our Price Trackers [HERE](https://www.coingecko.com/en/coins/cryptofightclub) or [HERE](https://athda.com/coin/cryptofightclub)"
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
  name: 'cfccinfo',
  description: 'shows CFCCs info.',
  usage: 'cfccinfo'
};

