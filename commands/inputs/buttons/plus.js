exports.run = (client, message) => {
    try {
        const conn = require("../../../switch/index");

        conn.write("click PLUS \r\n");

        console.log(`Input: PLUS by ${message.author.tag}`);
        return message.react('✔️');

    } catch (e) {
        // log error
        const logger = require('../../../util/logger');

        logger(e, client, message);
    };
};
