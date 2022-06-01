const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');
require('unix-timestamp');

module.exports = class UnixtimestampCommand extends BaseCommand {
  constructor() {
    super('uts', 'utils', ["unixtimestamp", "Uts", "UTS"]);
  }

  run(client, message, args)
  {

    let uts = (Math.floor(new Date().getTime() / 1000));

    const embed = new MessageEmbed()
      .setColor(message.member.displayHexColor || 'BLUE')
      .addField('Current Unix Time in GMT+10:30 (Adelaide)', `${uts}\n<t:${uts}>`, true)
      .setFooter(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL()}`)

    message.channel.send({ embeds: [embed] });
  }
}