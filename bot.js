const Discord = require('discord.js'),
   const client = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("513072086839853056");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Welcome to DreamServer **`), 4000)        
}
});
client.login(process.env.BOT_TOKEN);
