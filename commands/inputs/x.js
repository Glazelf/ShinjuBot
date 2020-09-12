exports.run = (client, message) => {
    try {

        const conn = require("../../switch/index");

        conn.write("click X \r\n");

        console.log(`Input: X by ${message.author.tag}`);
        return message.channel.send(`> X pressed, ${message.author}.`);

    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};
