module.exports = async (client, message) => {
  // Import globals
  let globalVars = require('./ready');
  try {
    const Discord = require("discord.js");
    let secondCharacter = message.content.charAt(1);

    // Ignore all bots
    if (message.author.bot) return;

    // Ignore commands in DMs
    if (message.channel.type == "dm") return;

    // Ignore messages not starting with the prefix
    if (message.content.indexOf(globalVars.prefix) !== 0) return;

    // Ignore messages that are just prefix
    if (message.content === globalVars.prefix) return;

    // Ignore messages that start with prefix double or prefix space
    if (secondCharacter == globalVars.prefix || secondCharacter == ` `) return;

    // Standard definition
    const args = message.content.slice(globalVars.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);

    // If that command doesn't exist, exit
    if (!cmd) return;

    // +1 command count and drop message count
    globalVars.totalCommands += 1;

    // Run the command
    cmd.run(client, message, args);

  } catch (e) {
    // log error
    const logger = require('../util/logger');

    logger(e, client, message);
  };
};
