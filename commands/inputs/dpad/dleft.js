exports.run = (client, message) => {
    try {
        const conn = require("../../../switch/index");

        conn.write("click DLEFT \r\n");

        console.log(`Input: DLEFT by ${message.author.tag}`);
        return message.react('✔️');

    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};
