const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed , MessageButton } = require('discord.js');
const paginationEmbed = require('discordjs-button-pagination');
const moment = require('moment');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'utils', ["Help"]);
  }

  run(client, message, args) {
      const members = message.guild.members.cache;
      const member = message.mentions.members.last() || message.member
      ///////////////////////////////////////////CONSTS/////////////////////////////////////////////////////////
      const basicEmbed = new MessageEmbed()
      .setColor(member.displayHexColor || 'BLUE')
      .setTitle("Basic Commands Help Page")
      .addField("Commands", `
      **❯ coinflip:** Flips a coin
      *usage: >coinflip*

      **❯ sinfo:** Server Infomation
      *usage: >sifno*

      **❯ uinfo:** Infomation on yourself or an users @
      *usage: >uinfo | >uinfo @example*

      **❯ uts:** Gets Unix Time Stamp
      *usage: >uts | <t:return value>*
      `)
      .setFooter(message.author.username, message.author.avatarURL())
      ////////////////////////////////////////EVERYONE EMBED/////////////////////////////////////////////////////
      const modEmbed = new MessageEmbed()
      .setColor(member.displayHexColor || 'BLUE')
      .setTitle("Mod Commands Help Page")
      .addField("Commands", `
      **❯ clear:** Clears messages from 0 - 100
      *usage: >clear [0-100]*

      **❯ Ban:** Bans @example user
      *usage: >ban @example [reason]*

      **❯ Kick:** Kicks @example user
      *usage: >kick @example [reason]*

      **❯ Ping:** Send bots ping
      *usage: >ping*
      `)
      .setFooter(message.author.username, message.author.avatarURL())
      ///////////////////////////////////////////MOD EMBED////////////////////////////////////////////////////////
      const tipEmbed = new MessageEmbed()
      .setColor(member.displayHexColor || 'BLUE')
      .setTitle("Info Page")
      .addField("\u200b", `
      **❯ **Every 5 minutes, the general topic will change.
      **❯ **The bot uses [Discord.JS](https://www.npmjs.com/package/discord.js) and [Slappey](https://www.npmjs.com/package/slappey).
      **❯ **All commands were made by [IGNOREDSOUL](https://github.com/IgnoredSoul/)
      `)
      .setFooter(message.author.username, message.author.avatarURL())
      ///////////////////////////////////////////TIPS EMBED/////////////////////////////////////////////////////////
      
      const nsfwEmbed = new MessageEmbed()
      .setColor(member.displayHexColor || 'BLUE')
      .setTitle("NSFW Commands Help Page")
      .setImage("https://camo.githubusercontent.com/02f73362b7b2d734728d66e47a4c2041c61c26a2ddf2378522b12bd7e23b0dfa/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3730373230313733383235353336383139342f3737303636383730333237313335343430382f686d7461692e706e67")
      .addField("Commands", `
      **❯ Examples:** Ass, Bdsm, Manga, Ero, Yuri, Thighs
      **❯ Examples:** Vagina, Gangbang, Gif, Foot, Orgy
      *usage: >hentai Ass | >h pantSu 3*

      [More Info](https://www.npmjs.com/package/hmtai?activeTab=readme)
      `)
      .setFooter(message.author.username, message.author.avatarURL())
      ///////////////////////////////////////////NSFWEMBED/////////////////////////////////////////////////////////
      ///////////////////////////////////////////EMBEDS/////////////////////////////////////////////////////////
      const button1 = new MessageButton()
      .setCustomId("previousbtn")
      .setLabel("Previous")
      .setStyle("DANGER");

      const button2 = new MessageButton()
        .setCustomId("nextbtn")
        .setLabel("Next")
        .setStyle("SUCCESS");

      const pages = [
        basicEmbed,
        modEmbed,
        nsfwEmbed,
        tipEmbed
        ];
        ///////////////////////////////////////////BUTTONS/////////////////////////////////////////////////////////


        const buttonList = [button1, button2];
        const timeout = 50000;
        paginationEmbed(message, pages, buttonList, timeout); 
  }
}