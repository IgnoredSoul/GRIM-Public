const BaseCommand = require('../../utils/structures/BaseCommand');
const importModules = require('import-modules');
const modules = importModules('./NSFW');
const { MessageEmbed } = require('discord.js');

// console.log(modules); if any errors

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('hentai', 'NSFW', ['Hentai', 'HENTAI', 'h', 'H']);
  }

    async run(client, message, args) //Dont u dare fucking touch it!
    {
        try{
            const embed = new MessageEmbed();

            let hentaiTerm = String(args[0]).toLowerCase()
            if(args[0] > 5) return message.channel.send("Keep it to 5 and below thank you")
            let amount = args[1]? args[1] : 1
            let _url = null

            if(!args[0]) return message.channel.send("Please put a search term in.")
            if(!message.channel.nsfw) return message.channel.send('The commands under the NSFW section can only be used in a Age Restricted channel')
            for(let i = 0; i < amount; i++)
            {
                _url = await modules["AllHentaiCommands"].hentaiParser(hentaiTerm)
                if(_url == 0) return(message.channel.send("No command named that. Use the NSFWhelp command"))

                embed.setImage(_url);
                embed.setFooter(message.author.username, message.author.avatarURL());
                embed.setTimestamp()

                message.channel.send({embeds: [embed]})
            }
        }catch(e){message.channel.send("Error:\n" + `\`\`\`${e}\`\`\``)}
    }
}