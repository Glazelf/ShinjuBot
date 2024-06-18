import pressStick from "../../../util/pressStick.js";

export default (client, message) => {
    return pressStick(client, message, "RIGHT", "0x7FFF 0x0");
};