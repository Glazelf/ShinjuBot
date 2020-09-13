exports.run = (client, message) => {
    try {
        const conn = require("../../../switch/index");

        conn.write("click LR \r\n");

        console.log(`Input: LR by ${message.author.tag}`);
        return message.react('✔️');

    } catch (e) {
        // log error
        const logger = require('../../../util/logger');

        logger(e, client, message);
    };
};
