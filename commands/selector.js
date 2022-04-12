const {
  MessageActionRow,
  MessageSelectMenu,
  MessageEmbed,
} = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const row = new MessageActionRow().addComponents(
  new MessageSelectMenu()
    .setCustomId('select')
    .setPlaceholder('Nothing selected')
    .addOptions([
      {
        label: 'Select me',
        description: 'This is a description',
        value: 'first_option',
      },
      {
        label: 'You can select me too',
        description: 'This is also a description',
        value: 'second_option',
      },
      {
        label: 'I am also an option',
        description: 'This is a description as well',
        value: 'third_option',
      },
    ]),
);

const embed = new MessageEmbed()
  .setColor('#0099ff')
  .setTitle('Some title')
  .setURL('https://discord.js.org/')
  .setDescription('Some description here');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('selector')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply({
      content: 'Pong!',
      ephemeral: true,
      embeds: [embed],
      components: [row],
    });
  },
};
