import axios from 'axios';
import { getToken } from './auth';

const instance = () => axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + getToken()
    }
})

const register = (data) => {
    return instance().post("/register", data)
}

const login = (data) => {
    return instance().post("/login", data)
}

const logout = () => {
    return instance().delete("/logout")
}



const client = {
    register, login, logout
}

export default client