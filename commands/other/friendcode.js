import logger from "../../../util/logger.js";

export default (client, message) => {
    try {
        return message.channel.send(`> My friendcode is ${client.config.friendcode}, ${message.author}.`);

    } catch (e) {
        logger(e, client, message);
    };
};