const fs = require('fs')
const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    // Tell console the bot has logged in
    console.log(client.user.tag + ' has logged in.');

    // Setting the bots status
    client.user.setPresence({status: 'dnd'})
    client.user.setActivity(`Starting up`, { type: 'WATCHING' });

    // Cycling through activities
    const activities = [
      `youtube`,
      `the prefix >`,
    ];

    //Cycles every 10 seconds
    setInterval(() =>{
      const status = `${activities[Math.floor(Math.random()*activities.length)]}`
      client.user.setActivity(`${status}`, { type: 'WATCHING' });
    }, 10000)
  }
}
