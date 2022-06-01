const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = class UserinfoCommand extends BaseCommand {
  constructor() {
    super('uinfo', 'utils', ["UInfo", "Uinfo", "UserInfo", "Userinfo"]);
  }


  
  async run(client, message, args) {
    try{  
      const member = message.mentions.members.first() || message.member
      const embed = new MessageEmbed()
        .setFooter(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL()}`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
        .setColor(member.displayHexColor || 'BLUE')
        .addField('User', `
          **❯ Username:** ${member.user.username}
          **❯ Discriminator:** ${member.user.discriminator}
          **❯ ID:** ${member.id}	
          **❯ Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })})
          **❯ Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}
          **❯ Status:** ${member.presence? member.presence.status : "Offline"}
          \u200b
          `
        )
        .addField('Member', `
          **❯ Highest Role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}
          **❯ Server Join Date:** ${moment(member.joinedAt).format('LL LTS')}
          **❯ Highest Role:** ${member.roles.hoist ? member.roles.hoist.name : 'None'}
          \u200b
          `
        );
      message.channel.send({ embeds: [embed] });
    }
    catch(e){
      message.channel.send(`Test Failed. Error:\n\`\`\`${e}\`\`\``)
      console.log(e)
    }
  }
}