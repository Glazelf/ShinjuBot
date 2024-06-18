import logger from "../../../util/logger.js";
import conn from "../../../switch/index.js";

export default (client, message, stick, input) => {
    try {
        conn.write(`setStick ${stick} ${input} \r\n`);
        // sets a timeout to revert cstick
        setTimeout(async () => { conn.write(`setStick ${stick} 0x0 0x0 \r\n`) }, 250);

        console.log(`Input: ${stick} ${input} by ${message.author.tag}`);
        return message.react('✔️');

    } catch (e) {
        logger(e, client, message);
    };
};