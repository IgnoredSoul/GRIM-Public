const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, MessageCollector, MessageButton, MessageActionRow, ButtonInteraction } = require('discord.js');
const config = require('../../../slappey.json');
const fs = require('fs');
const { Console } = require('console');


module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('test', 'testing', ["t"]);
  }
  
  async run(client, message, args) {
    
  }}
