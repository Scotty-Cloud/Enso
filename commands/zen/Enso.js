const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('enso')
		.setDescription('Replies with zen message!'),
	async execute(interaction) {
		await interaction.reply('Imperfection is inherent in life. Have the strength to move forward!');
	},
};