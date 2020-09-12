exports.run = (client, message) => {
    try {
        const conn = require("../../../switch/index");

        conn.write("setStick LEFT 0x0 -0x8000 \r\n");

        // sets a timeout to revert cstick
        setTimeout(async () => { conn.write("setStick LEFT 0x0 0x0 \r\n")}, 250);

        console.log(`Input: DOWN by ${message.author.tag}`);
        return message.react('✔️');

    } catch (e) {
        // log error
        const logger = require('../../../util/logger');

        logger(e, client, message);
    };
};
