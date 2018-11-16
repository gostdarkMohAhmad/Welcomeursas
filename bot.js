const Discord = require('discord.js');
const client = new Discord.Client();

client.on("guildMemberAdd", member => { 
        if(member.guild.id === "500370868493352970") {  
setTimeout(function(){ 
  const channel = member.guild.channels.find('513072086839853056');  
if (!channel) return;  
  channel.send(`**Welcome To __DreamServer__  ** ❤️ `)  
}, 5000);    
}}); 
client.login(process.env.BOT_TOKEN);
