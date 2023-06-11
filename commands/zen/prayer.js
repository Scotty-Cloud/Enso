const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prayer')
		.setDescription('Replies with self reassurance!'),
	async execute(interaction) {
		await interaction.reply('If there is a Goliath in front you, There is a Davis inside of you!');
	},
};