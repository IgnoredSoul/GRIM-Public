const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed , MessageButton } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination');
const moment = require('moment');

module.exports = class ServerinfoCommand extends BaseCommand {
  constructor() {
    super('sinfo', 'utils', ["SInfo", "ServerInfo", "serverinfo", "Sinfo"]);
  }

  async run(client, message, args) {
    const filterLevels = {
      DISABLED: 'Off',
      MEMBERS_WITHOUT_ROLES: 'No Role',
      ALL_MEMBERS: 'Everyone'
    };
    
    
    const verificationLevels = {
      NONE: 'None', 
      LOW: 'Low',
      MEDIUM: 'Medium',
      HIGH: '(╯°□°）╯︵ ┻━┻',
      VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
    };
    
    const regions = {
      brazil: 'Brazil',
      europe: 'Europe',
      hongkong: 'Hong Kong',
      india: 'India',
      japan: 'Japan',
      russia: 'Russia',
      singapore: 'Singapore',
      southafrica: 'South Africa',
      sydeny: 'Sydeny',
      'us-central': 'US Central',
      'us-east': 'US East',
      'us-west': 'US West',
      'us-south': 'US South'
    };
    try{
        const { name, region, memberCoutn } = await message.guild
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;
        const owner = members.find(member => member.id === message.guild.ownerId);
        const member = message.mentions.members.last() || message.member

        const GeneralEmbed = new MessageEmbed()
          .setDescription(`**Guild information for __${message.guild.name}__**`)
          .setColor(member.displayHexColor || 'BLUE')
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setTitle("Server Info")
          .addField("General Info", 
          `
          **❯ Name:** ${message.guild.name}
          **❯ ID:** ${message.guild.id}
          **❯ Owner:** ${owner}
          **❯ Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}
          **❯ Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}
          **❯ Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}
          \u200b
          Requested by ${message.author.tag}
          `)
          .setTimestamp();

        const StatisticEmbed = new MessageEmbed()
          .setDescription(`**Guild information for __${message.guild.name}__**`)
          .setColor(member.displayHexColor || 'BLUE')
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setTitle("Server Info")
          .addField("General Info",
          `
          **❯ Role Count:** ${roles.length}
          **❯ Emoji Count:** ${emojis.size}
          **❯ Member Count:** ${message.guild.memberCount}
          **❯ Humans Online:** ${members.filter(member => !member.user.bot).size}
          **❯ Bots Online:** ${members.filter(member => member.user.bot).size}
          \u200b
          Requested by ${message.author.tag}
          `)
          .setTimestamp();

          const button1 = new MessageButton()
            .setCustomId("previousbtn")
            .setLabel("Previous")
            .setStyle("DANGER");
    
          const button2 = new MessageButton()
            .setCustomId("nextbtn")
            .setLabel("Next")
            .setStyle("SUCCESS");
          const pages = [
            GeneralEmbed,
            StatisticEmbed,
            ];

          const buttonList = [button1, button2];
          const timeout = 10000;
          paginationEmbed(message, pages, buttonList, timeout);
      }
    catch(e){
      message.channel.send(`Test Failed. Error:\n\`\`\`${e}\`\`\``)
      console.log(e)
    }
  }
}