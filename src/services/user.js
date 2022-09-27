import { catcher } from "./utils";

const getInfo = (client) => async () => catcher(client.get)("/user");

const user = (client) => ({
  getInfo: getInfo(client),
});

export default user;