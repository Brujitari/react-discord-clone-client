import axios from "axios";
import auth from "./auth"

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    secure: true,
});

const services = {
    auth: auth(instance),
}

export default services;