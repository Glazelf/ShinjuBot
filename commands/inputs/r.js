exports.run = (client, message) => {
    try {

        const conn = require("../../switch/index");

        conn.write("click R \r\n");

        console.log(`Input: R by ${message.author.tag}`);
        return message.channel.send(`> R pressed, ${message.author}.`);

    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};
