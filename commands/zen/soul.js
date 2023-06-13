const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('soul')
		.setDescription('Replies with comforting your soul!'),
	async execute(interaction) {
		await interaction.reply('Satisfy your soul not society!');
	},
};