const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setbuildname')
		.setDescription('sets the build name of the player you are editing')
		.addStringOption(option => option.setName('player').setDescription("Name of the player you are trying to set the build name of").setRequired(true))
		.addStringOption(option => option.setName('slot').setDescription("The slot you are trying to edit").setRequired(true))
		.addStringOption(option => option.setName('name').setDescription("The build name you are trying to give them").setRequired(true)),
	async execute(interaction, poll, Logger) {
		if (interaction.guild.id === '890759609378275469' || interaction.guild.id === "998091130459656282") {
			if (interaction.member.roles.cache.has("1090757631485939734")) {

				const data = {
					method: "BuildName",
					name: interaction.options.getString('player'),
					slot: interaction.options.getString('slot'),
					value: interaction.options.getString('name'),
				}

				Logger({
					title: "Build name Log",
					description: `${interaction.user.tag} set build name of ${data.name} to ${data.value}`
				}, '1004191599389061171')

				await poll.broadcast("FireCommand", data)

				return interaction.reply({ content: `Successfully set ${data.name}'s build name to ${data.value}` });
			} else {
				return interaction.reply({ content: `You don't have permission to run this command.` });
			}

		} else {
			return interaction.reply({ content: `This guild is does not have permission to run this command.` });
		}
	},
};