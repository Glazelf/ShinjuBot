exports.run = (client, message) => {
    try {

        const conn = require("../../switch/index");

        conn.write("click MINUS \r\n");

        console.log(`Input: MINUS by ${message.author.tag}`);
        return message.channel.send(`> Minus pressed, ${message.author}.`);

    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};
