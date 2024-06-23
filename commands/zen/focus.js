const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('focus')
		.setDescription('Replies with focusing thoughts!'),
	async execute(interaction) {
		await interaction.reply('Restart, Reset and Refocus. Your time will come. Dont lose sight of what is important.');
	},
};