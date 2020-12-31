require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
    // msg.channel.send('pong');
  }
});