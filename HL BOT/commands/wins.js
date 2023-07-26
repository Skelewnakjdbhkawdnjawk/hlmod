const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setwins')
		.setDescription('sets wins of the player you are mentioning.')
		.addStringOption(option => option.setName('player').setDescription("Name of the player you are trying to giving / set wins to").setRequired(true))
		.addStringOption(option => option.setName('slot').setDescription("Slot Number of the player you are giving / setting wins to").setRequired(true))
		.addStringOption(option => option.setName('amount').setDescription("Amount of wins you are settings").setRequired(true)),
	async execute(interaction, poll, Logger) {
		if (interaction.guild.id === '890759609378275469' || interaction.guild.id === "998091130459656282") {
			if (interaction.member.roles.cache.has("1005798926219235338") || interaction.member.roles.cache.has("1090757631485939734")) {
			const data = {
				method: "Wins",
				name: interaction.options.getString('player'),
				slot: interaction.options.getString('slot'),
				value: interaction.options.getString('amount'),
			}

			Logger({
				title: "Wins Log",
				description: `${interaction.user.tag} set wins of ${data.name} to ${data.value}`
			}, '1004204263020437595')

			await poll.broadcast("FireCommand", data)

			return interaction.reply({ content: `Successfully set ${data.name}'s Wins to ${data.value}` });
		} else {
			return interaction.reply({ content: `You don't have permission to run this command.` });
		}
		} else {
			return interaction.reply({ content: `This guild is does not have permission to run this command.` });
		}
	},
};