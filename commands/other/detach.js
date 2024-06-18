import logger from "../../../util/logger.js";
import conn from "../../../switch/index.js";
import globalVars from "../../objects/globalVars.json" with { type: "json" };

export default (client, message) => {
    try {
        if (message.author.id !== client.config.ownerID) return message.reply(globalVars.lackPerms);

        conn.write("detachController \r\n");

        console.log(`Detached by ${message.author.tag}`);
        return message.channel.send(`> Successfully detached, ${message.author}.`);

    } catch (e) {
        logger(e, client, message);
    };
};