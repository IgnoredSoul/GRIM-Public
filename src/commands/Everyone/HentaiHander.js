const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require('discord.js');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('hentai', 'NSFW', ['Hentai', 'HENTAI', 'h', 'H']);
  }

    async run(client, message, args)
    {
      try{
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