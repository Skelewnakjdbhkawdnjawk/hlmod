const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans mentioned player from the game, with the reason provided.')
		.addStringOption(option => option.setName('player').setDescription("Name of the player you are trying to ban").setRequired(true))
		.addStringOption(option => option.setName('reason').setDescription("Reason that the player is being banned").setRequired(true)),
	async execute(interaction, poll, Logger) {
		if (interaction.member.roles.cache.has("890760455671406623") || interaction.member.roles.cache.has("1090757631485939734")) {
		    if (interaction.guild.id === '890759609378275469' || interaction.guild.id === "998091130459656282") {
				 
				const data = {
					method: "Ban",
					name: interaction.options.getString('player'),
					reason: interaction.options.getString('reason')
				}

				await poll.broadcast("FireCommand", data)

				Logger({
					title: "Ban Log",
					description: `${interaction.user.tag} banned ${data.name} for ${data.reason}`
				}, '1004190058787639336')

				return interaction.reply({ content: `Successfully Banned ${data.name}` });
			} else {
				return interaction.reply({ content: `This guild is does not have permission to run this command.` });
			}

		} else {
			interaction.reply({ content: "You don't have access to this command." })
		}
	},
};