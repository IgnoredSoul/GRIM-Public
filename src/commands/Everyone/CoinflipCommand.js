const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class CoinflipCommand extends BaseCommand {
  constructor() {
    super('coinflip', 'fun', ["Coinflip", "CoinFlip"]);
  }

  async run(client, message, args) {
    message.channel.send('https://tenor.com/view/fred-flintstone-barney-rubble-coin-flipping-flip-a-coin-the-flintstones-gif-23183277').then(await sleep(4700)).then(msg => msg.delete());

    function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }

    let random = (Math.floor(Math.random() * Math.floor(2)));
    if(random === 0){
      message.channel.send(':tada: Heads! :tada:');
     }else{
      message.channel.send(':tada: Tails! :tada:');
     }
  }
}