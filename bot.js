const Discord = require('discord.js');
const client = new Discord.Client();

client.on("guildMemberAdd", member => { // @! Falsteni - آدم#8655 
        if(member.guild.id === "500370868493352970") {  // @! Falsteni - آدم#8655 
setTimeout(function(){ // @! Falsteni - آدم#8655 
  const channel = member.guild.channels.find('513072086839853056');  // @! Falsteni - آدم#8655 
if (!channel) return; // @! Falsteni - آدم#8655 
  channel.send(`**Welcome To __DreamServer__  ** ❤️ `)  // @! Falsteni - آدم#8655 
}, 5000);  // @! Falsteni - آدم#8655 
}}); // @! Falsteni - آدم#8655 
client.login(process.env.BOT_TOKEN);
