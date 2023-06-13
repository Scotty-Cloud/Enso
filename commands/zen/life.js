const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('life')
		.setDescription('Replies with life experiences!'),
	async execute(interaction) {
		await interaction.reply('Life is not about the big things you do, but the small experiences you make.');
	},
};