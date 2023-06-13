const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('options')
		.setDescription('Replies with list of options!'),
	async execute(interaction) {
		await interaction.reply('affirmation, enso, focus, inspire, prayer, ukiyo');
	},
};