import logger from "../../../util/logger.js";
import conn from "../../../switch/index.js";

export default (client, message) => {
    try {
        conn.write("click R3 \r\n");

        console.log(`Input: R3 by ${message.author.tag}`);
        return message.react('✔️');

    } catch (e) {
        logger(e, client, message);
    };
};