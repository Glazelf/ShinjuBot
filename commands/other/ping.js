import logger from "../../util/logger.js";

export default (client, message) => {
    try {
        let PongString = `> Pong!'ed back at ${message.author} in`;

        return message.channel.send(`${PongString} (hold on, processing latency...)`).then(m => m.edit(`${PongString} ${m.createdTimestamp - message.createdTimestamp}ms.`));

    } catch (e) {
        logger(e, client, message);
    };
};