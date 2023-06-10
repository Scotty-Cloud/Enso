const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('affirmation')
		.setDescription('Replies with positive reassurance!'),
	async execute(interaction) {
		await interaction.reply('You will succeed. Maybe not immediately, but definitely!');
	},
};