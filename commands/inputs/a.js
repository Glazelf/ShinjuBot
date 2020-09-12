exports.run = (client, message) => {
    try {

        return message.channel.send(`> a pressed`)

    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};
