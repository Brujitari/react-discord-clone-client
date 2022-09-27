import axios from "axios";
import auth from "./auth"
import user from "./user"

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    secure: true,
});

const services = {
    auth: auth(instance),
    user: user(instance)
}

export default services;