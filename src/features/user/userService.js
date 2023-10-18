import axios from "axios"
import {URL} from "../../utils/config"

const createAccount = async(data) => {
    const response = await axios.post(`${URL}user/create`, data)
    return response.data
}

const login = async(data) => {
    const response = await axios.post(`${URL}user/login`, data)
    return response.data
}

const userService = {
    createAccount,
    login,
}

export default userService