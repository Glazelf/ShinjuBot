exports.run = (client, message) => {
    try {
        const conn = require("../../switch/index");

        conn.write("click DLEFT \r\n");

        console.log(`Input: DLEFT by ${message.author.tag}`);
        return message.channel.send(`> D-Pad LEFT pressed, ${message.author}.`);

    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};
