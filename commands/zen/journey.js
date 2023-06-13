const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('journey')
		.setDescription('Replies with enjoying the journey!'),
	async execute(interaction) {
		await interaction.reply('Life is not about the beginning or end, its about everything in between.');
	},
};