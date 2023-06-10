const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('inspire')
		.setDescription('Replies with inspiring message!'),
	async execute(interaction) {
		await interaction.reply('When you get tired, learn to rest not quit!');
	},
};