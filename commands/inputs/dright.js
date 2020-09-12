exports.run = (client, message) => {
    try {
        const conn = require("../../switch/index");

        conn.write("click DRIGHT \r\n");

        console.log(`Input: DRIGHT by ${message.author.tag}`);
        return message.react('✔️');

    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};
