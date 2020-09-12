exports.run = (client, message) => {
    try {
        if (message.author.id !== client.config.ownerID) return message.reply(globalVars.lackPerms);

        const conn = require("../../switch/index");

        conn.write("detachController \r\n");

        console.log(`Detached by ${message.author.tag}`);
        return message.channel.send(`> Successfully detached, ${message.author}.`);

    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};
