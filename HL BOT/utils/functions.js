const discord = require("discord.js");
const mongodb = require("mongodb").MongoClient; // typedef

const { logsGuildId } = require("../config.js");

module.exports = {
    /**
     * @description Create a product
     * @param {discord.Interaction} interaction 
     * @param {mongodb} db
     */
    logs: function (interaction, db, title, field) {
        let guild = interaction.client.guilds.cache.get(logsGuildId);
        let channel = guild.channels.cache.get("959188118416797719");

        let embed = new discord.MessageEmbed()
            .setTitle(title)
            .setColor("GREEN")
            .addFields(field)
            .setThumbnail(interaction.member.user.displayAvatarURL());
        channel.send({ embeds: [embed] });

    },

    /**
     * @description Create a product
     * @param {discord.Interaction} interaction 
     * @param {mongodb} db
     * @param {Array} data
     */
    createProduct: function (interaction, db, data) {
        return new Promise((resolve, reject) => {
            const products = db.db("aerunus").collection("products");
            products.insertOne({ name: data.name, desc: data.desc, dev: data.dev, role: data.role, file: "N/A", purchasable: data.purchasable }).then((res) => {
                resolve({ ok: true, message: "OK" });
            }).catch(reject);
        });
    },

    /**
     * @description Delete a product
     * @param {discord.Interaction} interaction 
     * @param {mongodb} db
     * @param {Array} data
     */
     deleteProduct: function (interaction, db, data) {
        return new Promise((resolve, reject) => {
            const products = db.db("aerunus").collection("products");
            const purchases = db.db("aerunus").collection("purchases");
            products.deleteOne({ _id: data.id }).then(() => {
                purchases.deleteMany({ product: data.id }).then(() => {
                    resolve({ ok: true, message: "OK" });
                }).catch(reject);
            }).catch(reject);
        });
    },
};
