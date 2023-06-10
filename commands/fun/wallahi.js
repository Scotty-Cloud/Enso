const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wallahi')
		.setDescription('Replies with you get the slipper!'),
	async execute(interaction) {
		await interaction.reply('you get the slipper!');
	},
};