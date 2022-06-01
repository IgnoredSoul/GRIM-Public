const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ClearCommand extends BaseCommand {
  constructor() {
    super('clear', 'mod', []);
  }

  async run(client, message, args) {
    try{
      function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 
      let amount = isNumber(`${args[0]}`) == true? `${args[0]}` : 0 

      if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send('You dont have the perms to do this.')
      else{
        if (!amount) return message.channel.send('You haven\'t given an amount of messages which should be deleted!').then(msg => {setTimeout(() => msg.delete(), 5000)}) // Checks if the `amount` parameter is given

        if (amount > 100) return message.channel.send('You can`t delete more than 100 messages at once!').then(msg => {setTimeout(() => msg.delete(), 5000)}) // Checks if the `amount` integer is bigger than 100
        if (amount < 1) return message.channel.send('You have to delete at least 1 message!') // Checks if the `amount` integer is smaller than 1
        message.delete();
        await message.channel.messages.fetch({ limit: amount }).then(messages => { 
          // Fetches the messages
          // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
          message.channel.bulkDelete(messages)
        });
        message.channel.send(`${args[0]} message(s) deleted`).then(msg => {setTimeout(() => msg.delete(), 500)})
      }
    }catch(e){
      console.error(`Error:\n${e}\n\n`)
      message.channel.send("I encountered an error??")
    }
  }
}