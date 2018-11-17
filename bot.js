const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("513072086839853056");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Welcome To __Dream__**`), 4000)        
}
});
client.login(process.env.BOT_TOKEN);
