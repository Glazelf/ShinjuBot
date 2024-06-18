import Discord from "discord.js";
import logger from "../../util/logger.js";
import globalVars from "../../objects/globalVars.json" with { type: "json" };

export default async (client, message) => {
    try {
        if (!message.channel.permissionsFor(message.guild.me).has("EMBED_LINKS")) return message.channel.send(`> I can't run this command because I don't have permissions to send embedded messages, ${message.author}.`);

        const helpEmbed = new Discord.MessageEmbed()
            .setColor(globalVars.embedColor)
            .setAuthor(`Help`, client.user.avatarURL())
            .addField("Commands:", `[List](https://github.com/Glazelf/ShinjuBot/wiki/Commands 'Commands List')`, false)
            .addField("Discord:", `[Server Invite](https://discord.gg/2gkybyu 'Server Invite')`, false)
            .setFooter(`Requested by ${message.author.tag}`)
            .setTimestamp();

        return message.channel.send(helpEmbed);

    } catch (e) {
        logger(e, client, message);
    };
};