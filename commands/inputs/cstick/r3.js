exports.run = (client, message) => {
    try {
        const conn = require("../../../switch/index");

        conn.write("click R3 \r\n");

        console.log(`Input: R3 by ${message.author.tag}`);
        return message.react('✔️');

    } catch (e) {
        // log error
        const logger = require('../../../util/logger');

        logger(e, client, message);
    };
};
