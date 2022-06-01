const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'mod', []);
  }

  run(client, message, args) {
    const user = message.mentions.users.first();
    let reason = "No reason given."
    if(args[1])
      reason = args[1]

    if (user) {
      const member = message.guild.members.resolve(user);
      if (member) {
        member
          .ban({
            reason: `${reason}`,
          })
          .catch(err => {
            message.channel.send('I was unable to ban the member');
          });
      }
    }
      else if(!user)
        message.channel.send("You didn't mention the user to ban!");
  }
}