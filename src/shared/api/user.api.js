import axios from "./axios";


export const login = async (request) => {
    return axios.post("/auth/login", request).then(res => res.data);
}

export const register = async (request) => {
    return axios.post("/auth/register", request).then(res => res.data);
}

export const getUserInfo = async () => {
    return axios.get("/auth/me").then(res => res.data);
}

export const logout = async () => {
    return axios.post("/auth/logout").then(res => res.data);
}