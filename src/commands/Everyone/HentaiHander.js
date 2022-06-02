const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('hentai', 'Everyone', ['Hentai', 'HENTAI', 'h', 'H']);
  }

    async run(client, message, args)
    {
      try{
        if(!message.channel.nsfw) return message.channel.send('The commands under the NSFW section can only be used in a Age Restricted channel')
        if(!args[0]) return message.channel.send("Please put a search term in.")

        const search = ['-loli', '-furry', '-futa', '-animal']
        var amount = 1;
  
        for(var i = 0; i < args.length - 1; i++) {
          if(args[i].includes("-"))
            amount = args[++i]
          else
            search.push(args[i]);
        }
        const Booru = require('booru')
  
        Booru.search('gelbooru', search, { limit: amount, random: true }).then(
          posts => {
            for (let post of posts)
              message.channel.send(post.fileUrl)
          },
        )
      }catch(e){console.log(e)}
    }
}