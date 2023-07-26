const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('announce')
		.setDescription('Global announcement to all roblox servers')
		.addStringOption(option => option.setName('message').setDescription("message that you are announcing").setRequired(true)),
	async execute(interaction, poll, Logger) {
		if (interaction.member.roles.cache.has("890760455671406623") || interaction.member.roles.cache.has("1090757631485939734")) {
		    if (interaction.guild.id === '890759609378275469' || interaction.guild.id === "998091130459656282") {
				const data = {
					method: "Announcement",
					name: interaction.user.username,
					message: interaction.options.getString('message'),
				}

				await poll.broadcast("FireCommand", data)

				Logger({
					title: "Announcement Log",
					description: `${interaction.user.tag} made a announcement: ${data.message}`
				}, '1005765527412686940')

				return interaction.reply({ content: `Succesfully announced: ${data.message}` });
			} else {
				return interaction.reply({ content: `This guild is does not have permission to run this command.` });

			}
		} else {
			interaction.reply({ content: "You don't have access to this command." })
		}
	},
};