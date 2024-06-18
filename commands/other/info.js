import Discord from "discord.js";
import logger from "../../util/logger.js";
import globalVars from "../../objects/globalVars.json" with { type: "json" };

export default async (client, message) => {
    try {
        if (!message.channel.permissionsFor(message.guild.me).has("EMBED_LINKS")) return message.channel.send(`> I can't run this command because I don't have permissions to send embedded messages, ${message.author}.`);

        function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        };
        // Calculate the uptime in days, hours, minutes, seconds
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        // Figure out if the numbers given is different than 1
        let multiDays = "";
        if (days !== 1) { multiDays = "s" };
        let multiHours = "";
        if (hours !== 1) { multiHours = "s" };
        let multiMinutes = "";
        if (minutes !== 1) { multiMinutes = "s" };
        let multiSeconds = "";
        if (seconds !== 1) { multiSeconds = "s" };
        // Reset hours
        while (hours >= 24) {
            hours = hours - 24;
        };
        // Bind variables together into a string
        let uptime = `${hours} hour${multiHours}, ${minutes} minute${multiMinutes} and ${seconds} second${multiSeconds}`;
        // Add day count if there are days
        if (days != 0) {
            uptime = `${days} day${multiDays}, ${uptime}`;
        };

        let avatar = null;
        if (client.user.avatarURL()) avatar = client.user.avatarURL({ format: "png" });

        const profileEmbed = new Discord.MessageEmbed()
            .setColor(globalVars.embedColor)
            .setAuthor(client.user.username, avatar)
            .setThumbnail(avatar)
            .addField("Account:", client.user, true)
            .addField("Owner:", "Glaze#6669", true)
            .addField("Prefix:", globalVars.prefix, true)
            .addField("Code:", "[Github](https://github.com/Glazelf/ShinjuBot/ 'Shinju Github')", true)
            .addField("Avatar artist:", "[Arpee](https://twitter.com/Arpee__)", true)
            .addField("Uptime:", `${uptime}.`, false)
            .addField("Created at:", `${client.user.createdAt.toUTCString().substr(0, 16)}, ${checkDays(client.user.createdAt)}.`, false)
            .setFooter(`Requested by ${message.author.tag}`)
            .setTimestamp();
        return message.channel.send(profileEmbed);

    } catch (e) {
        logger(e, client, message);
    };
};