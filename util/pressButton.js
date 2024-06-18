import logger from "../../../util/logger.js";
import conn from "../../../switch/index.js";

export default (client, message, button) => {
    try {
        conn.write(`click ${button.toUpperCase()} \r\n`);

        console.log(`Input: ${button.toUpperCase()} by ${message.author.tag}`);
        return message.react('✔️');

    } catch (e) {
        logger(e, client, message);
    };
};