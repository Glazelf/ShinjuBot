exports.run = async (client, message) => {
    try {
        const conn = require("../../../switch/index");

        conn.write("setStick LEFT -0x8000 0x0");

        // sets a timeout to revert cstick
        setTimeout(async () => { await conn.write("setStick LEFT 0x0 0x0")}, 250);

        console.log(`Input: LEFT by ${message.author.tag}`);
        return message.react('✔️');

    } catch (e) {
        // log error
        const logger = require('../../../util/logger');

        logger(e, client, message);
    };
};
