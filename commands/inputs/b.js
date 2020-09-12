exports.run = (client, message) => {
    try {
        const conn = require("../../switch/index");

        conn.write("click B \r\n");

        console.log(`Input: B by ${message.author.tag}`);
        return message.channel.send(`> B pressed, ${message.author}.`);

    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};
