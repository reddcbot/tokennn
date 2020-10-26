const Discord = require('discord.js');

var hd = [
    "selam ",
    
];

module.exports.run = async (bot, message, args) => {

  message.channel.send ( "hg " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'aselam',
  description: '.',
  usage: 'aselam'
};