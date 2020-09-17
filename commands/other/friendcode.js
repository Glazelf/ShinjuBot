exports.run = (client, message) => {
    try {
        return message.channel.send(`> My friendcode is ${client.config.friendcode}, ${message.author}.`);

    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};
