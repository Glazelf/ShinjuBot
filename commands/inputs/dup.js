exports.run = (client, message) => {
    try {

        const conn = require("../../switch/index");

        conn.write("click DUP \r\n");

        console.log(`Input: DUP by ${message.author.tag}`);
        return message.channel.send(`> D-Pad UP pressed, ${message.author}.`);

    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};
