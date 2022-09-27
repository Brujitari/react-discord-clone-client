import { catcher } from "./utils";

const register = (client) => async (data) => catcher(client.post)("auth/register", data);

const login = (client) => async(data) => catcher(client.post)("auth/login", data);

// const logout = (client) => async() => catcher(client.post)("auth/logout")

const auth = (client) =>({
    register: register(client),
    login: login(client),
    // logout: logout(client),
});

export default auth;