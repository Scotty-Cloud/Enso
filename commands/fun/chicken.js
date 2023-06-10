const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chicken')
		.setDescription('Replies with dinner!'),
	async execute(interaction) {
		await interaction.reply('dinner!');
	},
};