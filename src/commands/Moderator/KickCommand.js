const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'mod', []);
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
          .kick({
            reason: `${reason}`,
          })
          .catch(err => {
            message.channel.send('I was unable to kick the member');
            console.error(err);
          });
      }
    }
      else if(!user)
        message.channel.send("You didn't mention the user to kick!");
  }
}