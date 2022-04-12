const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const row = new MessageActionRow().addComponents(
  new MessageButton()
    .setCustomId('primary')
    .setLabel('Primary')
    .setStyle('PRIMARY'),
);
const embed = new MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Some title')
  .setURL('https://discord.js.org')
  .setDescription('Some description here');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('button')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply({
      content: 'Button!',
      ephemeral: true,
      embeds: [embed],
      components: [row],
    });
  },
};
