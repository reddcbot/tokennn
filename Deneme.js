const ytdl = require ('ytdl-core');
var opus = require('opusscript');
const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
  function sleep (milliseconds)  {
    var start = new  Date().gettime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().gettime() - start ) >milliseconds){
        break;
        } 
  } 

} 
const http = require("htpp");
app.get("/", (request, response) => { 
   response.sendStatus(200);
  });
app.listen(process.env.PORT);
setInterval(() => {
  http.get("http://boost-aktif-.glitch.me/");
  }, 3000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();

const deneme = new Discord.Client();

////////////////////////////////////////////////////////////

deneme.on('message', async msg => { 
  if (msg.contenttoLoweCase() === "inci") { 
      const streamOptions = { seek: 1, volume: 100 };
       var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=0_1B6yX-gu0&t=54s',  { filter :'audioonly' });
      const dispatcher = connection.playStream(stream, streamOptions);

 })
}
})

/////////////////////
deneme.login("NzY2NTk3MjE1OTMzOTU2MTA2.X4lrVg.hMbJ8Nl5kFn_FFqVuj8IFvaYVbY");