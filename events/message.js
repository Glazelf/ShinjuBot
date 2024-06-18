import Discord from "discord.js";
import logger from "../util/logger.js";
import globalVars from "../../objects/globalVars.json" with { type: "json" };

export default async (client, message) => {
  try {
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
    // Grab the command data from client.commands
    const cmd = client.commands.get(command);
    // If that command doesn't exist, exit
    if (!cmd) return;
    // Run the command
    cmd.run(client, message, args);

  } catch (e) {
    logger(e, client, message);
  };
};