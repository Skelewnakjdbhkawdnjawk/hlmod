const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setcoins')
		.setDescription('sets coins of the player you are mentioning.')
		.addStringOption(option => option.setName('player').setDescription("Name of the player you are trying to give / set coins to").setRequired(true))
		.addStringOption(option => option.setName('slot').setDescription("Slot Number of the player you are giving / setting coins to").setRequired(true))
		.addStringOption(option => option.setName('amount').setDescription("Amount of coins you are giving / setting").setRequired(true)),
	async execute(interaction, poll, Logger) {
		if (interaction.guild.id === '890759609378275469' || interaction.guild.id === "998091130459656282") {
			if (interaction.member.roles.cache.has("1005798926219235338") || interaction.member.roles.cache.has("1090757631485939734")) {
			const data = {
				method: "Coins",
				name: interaction.options.getString('player'),
				slot: interaction.options.getString('slot'),
				value: interaction.options.getString('amount'),
			}

			Logger({
				title: "Coins Log",
				description: `${interaction.user.tag} set Coins of ${data.name} to ${data.value}`
			}, '1004201347777830985')

			await poll.broadcast("FireCommand", data)

			return interaction.reply({ content: `Successfully set ${data.name}'s Coins to ${data.value}` });
		} else {
			return interaction.reply({ content: `You don't have permission to run this command.` });
		}
		} else {
			return interaction.reply({ content: `This guild is does not have permission to run this command.` });
		}

	},
};