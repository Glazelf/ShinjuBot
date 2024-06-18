import logger from "../../../util/logger.js";
import conn from "../../../switch/index.js";

export default (client, message) => {
    try {
        conn.write("setStick LEFT 0x7FFF 0x0 \r\n");
        // sets a timeout to revert cstick
        setTimeout(async () => { conn.write("setStick LEFT 0x0 0x0 \r\n") }, 250);

        console.log(`Input: RIGHT by ${message.author.tag}`);
        return message.react('✔️');

    } catch (e) {
        logger(e, client, message);
    };
};