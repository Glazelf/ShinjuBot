import logger from "../../../util/logger.js";
import conn from "../../../switch/index.js";

export default async (client, message) => {
    try {
        conn.write("setStick LEFT -0x8000 0x0 \r\n");
        // sets a timeout to revert cstick
        setTimeout(async () => { conn.write("setStick LEFT 0x0 0x0 \r\n") }, 250);

        console.log(`Input: LEFT by ${message.author.tag}`);
        return message.react('✔️');

    } catch (e) {
        logger(e, client, message);
    };
};