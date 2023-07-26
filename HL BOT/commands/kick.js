const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kicks mentioned player from the game, with the reason provided.')
		.addStringOption(option => option.setName('player').setDescription("Name of the player you are trying to kick").setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription("Reason that the player is being kicked").setRequired(true)),
	async execute(interaction, poll, Logger) {
		if (interaction.guild.id === '890759609378275469' || interaction.guild.id === "998091130459656282") {
			if (interaction.member.roles.cache.has("1005798926219235338") || interaction.member.roles.cache.has("998292513024651395")) {
			const data = {
				method: "Kick",
				name: interaction.options.getString('player'),
				reason: interaction.options.getString('reason')
			}
	
			Logger({
				title: "Kick Log",
				description: `${interaction.user.tag} kicked ${data.name} for ${data.reason}`
			}, '1004190115603685476')
	
			await poll.broadcast("FireCommand", data)
	
			return interaction.reply({ content: `Successfully Kicked ${data.name}`});
		} else {
			return interaction.reply({ content: `You don't permission to run this command.`});
		}
		} else {
			return interaction.reply({ content: `This guild is does not have permission to run this command.`});
		}
	},
};