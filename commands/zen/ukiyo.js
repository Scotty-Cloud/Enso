const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ukiyo')
		.setDescription('Replies with happy messages!'),
	async execute(interaction) {
		await interaction.reply('Detach from the troubles of life, and live in the moment, Find your soul.');
	},
};