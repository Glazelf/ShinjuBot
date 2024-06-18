import pressButton from "../../../util/clickButton.js";

export default (client, message) => {
    return pressButton(client, message, "Y");
};