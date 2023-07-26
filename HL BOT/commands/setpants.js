const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setpants')
		.setDescription('sets pants of the player you are mentioning.')
		.addStringOption(option => option.setName('player').setDescription("Name of the player you are trying to give pants to").setRequired(true))
        .addStringOption(option => option.setName('slot').setDescription("Slot Number of the player you are giving pants to").setRequired(true))
        .addStringOption(option => option.setName('id').setDescription("Pants Id").setRequired(true)),
	async execute(interaction, poll, Logger) {
		if (interaction.guild.id === '890759609378275469' || interaction.guild.id === "998091130459656282") {
		if (interaction.member.roles.cache.has("890760455671406623") || interaction.member.roles.cache.has("1090757631485939734")) {
			const data = {
				method: "Pants",
				name: interaction.options.getString('player'),
				slot: interaction.options.getString('slot'),
				value: interaction.options.getString('id'),
			}
	
			Logger({
				title: "Jersey Log",
				description: `${interaction.user.tag} set Pants of ${data.name} to ${data.value}`
			}, '1004202930590724117')
	
			await poll.broadcast("FireCommand", data)
	
			return interaction.reply({ content: `Successfully set ${data.name}'s Pants to ${data.value}`});
		}
		} else
		{
			return interaction.reply({ content: `This guild is does not have permission to run this command.`});
		}
	},
};