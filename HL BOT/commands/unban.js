const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unban')
		.setDescription('Unbans mentioned player from the game, with the reason provided.')
		.addStringOption(option => option.setName('player').setDescription("Name of the player you are trying to unban").setRequired(true)),
	async execute(interaction, poll, Logger) {
		if (interaction.member.roles.cache.has("890760455671406623") || interaction.member.roles.cache.has("1090757631485939734")) {
		    if (interaction.guild.id === '890759609378275469' || interaction.guild.id === "998091130459656282") {
				
			const data = {
				method: "Unban",
				name: interaction.options.getString('player'),
			}

			await poll.broadcast("FireCommand", data)

			Logger({
				title: "Unban Log",
				description: `${interaction.user.tag} unbanned ${data.name}`
			}, '1004190058787639336')


			return interaction.reply({ content: `Successfully unbanned ${data.name}` });
		}
		} else {
			return interaction.reply({ content: `This guild is does not have permission to run this command.` });
		}
	},
};