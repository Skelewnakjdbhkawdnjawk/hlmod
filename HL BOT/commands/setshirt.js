const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setshirt')
		.setDescription('sets shirt of the player you are mentioning.')
		.addStringOption(option => option.setName('player').setDescription("Name of the player you are trying to give the shirt to").setRequired(true))
		.addStringOption(option => option.setName('slot').setDescription("Slot Number of the player you are giving a shirt to").setRequired(true))
		.addStringOption(option => option.setName('id').setDescription("shirt Id").setRequired(true)),
	async execute(interaction, poll, Logger) {
		if (interaction.guild.id === '890759609378275469') {
			const data = {
				method: "Shirt",
				name: interaction.options.getString('player'),
				slot: interaction.options.getString('slot'),
				value: interaction.options.getString('id'),
			}

			Logger({
				title: "Jersey Log",
				description: `${interaction.user.tag} set Shirt of ${data.name} to ${data.value}`
			}, '1004202930590724117')

			await poll.broadcast("FireCommand", data)

			return interaction.reply({ content: `Successfully set ${data.name}'s Shirt to ${data.value}` });
		} else {
			return interaction.reply({ content: `This guild is does not have permission to run this command.` });
		}
	},
};