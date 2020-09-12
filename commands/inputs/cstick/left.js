exports.run = async (client, message) => {
    try {
        const conn = require("../../../switch/index");

        conn.write("setStick LEFT yVal 0x7FFF");

        // sets a timeout to revert cstick
        setTimeout(async () => { conn.write("setStick LEFT yVal 0x0000")}, 250);

        conn.write("setStick LEFT yVal -0x8000");

        // sets a timeout to revert cstick
        setTimeout(async () => { conn.write("setStick LEFT -0x8000 0x0")}, 250);

        conn.write("setStick LEFT 0x7FFF 0x0");

        // sets a timeout to revert cstick
        setTimeout(async () => { conn.write("setStick LEFT 0x0 0x0")}, 250);

        console.log(`Input: DDOWN by ${message.author.tag}`);
        return message.react('✔️');

    } catch (e) {
        // log error
        const logger = require('../../../util/logger');

        logger(e, client, message);
    };
};
