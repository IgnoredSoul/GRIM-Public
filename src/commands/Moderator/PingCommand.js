const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'utils', []);
  }

  async run(client, message, args) {
    let pingMsg = await message.channel.send("📈Pinging")
    const member = message.mentions.members.last() || message.member

    const pingEmbed = new MessageEmbed()
      .setColor(member.displayHexColor || 'BLUE')
      .addField("📈 Results 📉", `
      **❯ Server Ping: **${pingMsg.createdAt - message.createdAt}ms | ${(pingMsg.createdAt - message.createdAt) / 1000} seconds
      **❯ Api Ping: **${Math.round(client.ws.ping)}ms | ${(Math.round(client.ws.ping) / 1000)} seconds
      **❯ Uptime: **${msToTime(client.uptime)}
      `)
      .setFooter(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL()}`)

    pingMsg.delete()
    message.channel.send({ embeds: [pingEmbed] })

    function msToTime(ms){
      let days = Math.floor(ms / 86400000); // 24*60*60*1000
      let daysms = ms % 86400000; // 24*60*60*1000
      let hours = Math.floor(daysms / 3600000); // 60*60*1000
      let hoursms = ms % 3600000; // 60*60*1000
      let minutes = Math.floor(hoursms / 60000); // 60*1000
      let minutesms = ms % 60000; // 60*1000
      let sec = Math.floor(minutesms / 1000);
    
      let str = "";
      if (days) str = str + days + "d";
      if (hours) str = str + hours + "h";
      if (minutes) str = str + minutes + "m";
      if (sec) str = str + sec + "s";
    
      return str;
    }
  }
}