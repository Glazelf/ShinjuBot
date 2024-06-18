import logger from "../../../util/logger.js";
import conn from "../../../switch/index.js";

export default (client, message) => {
    try {
        conn.write("click L3 \r\n");

        console.log(`Input: L3 by ${message.author.tag}`);
        return message.react('✔️');

    } catch (e) {
        logger(e, client, message);
    };
};