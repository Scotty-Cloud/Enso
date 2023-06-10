const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ima')
		.setDescription('Replies with noobie!'),
	async execute(interaction) {
		await interaction.reply('noobie!');
	},
};