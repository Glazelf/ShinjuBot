exports.run = (client, message) => {
    try {
        const conn = require("../../switch/index");

        conn.write("click A \r\n");

        console.log(`Input: A by ${message.author.tag}`);
        return message.channel.send(`> A pressed, ${message.author}.`);

    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};
