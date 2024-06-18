export default (exception, client, message = null) => {
    // Import globals
    let globalVars = require('../events/ready');

    // Log message
    if (message) message.channel.send(`> An error has occurred trying to run the command. The error has already been logged, but please also report this as an issue on the Github page or send a message to Glaze#6669. For links and other information use ${globalVars.prefix}info.`);

    // log error
    return console.log(exception);
};