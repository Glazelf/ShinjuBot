import pressStick from "../../../util/pressStick.js";

export default (client, message) => {
    return pressStick(client, message, "LEFT", "-0x8000 0x0");
};