import axios from "axios"
import {URL} from "../../utils/config"

const getProducts = async() =>{
    const response = await axios.post(`${URL}product/get-all`)
    return response.data
}

const getAproduct = async(id) =>{
    const response = await axios.post(`${URL}product/get-one`,id)
    return response.data
}

const addToCart = async(data) =>{
    console.log(data)

    const response = await axios.post(`${URL}product/add-to-cart`,data)
    return response.data
}

const getCart = async(token) =>{
    const response = await axios.post(`${URL}product/get-cart`,token)
    return response.data
}




// const order = async(data) =>{
//     const response = await axios.post(`${URL}product/order`,data)
//     return response.data
// }
// const getOrder = async() =>{
//     const response = await axios.post(`${URL}product/get-order`)
//     return response.data
// }

export const productService = {
    getProducts,
    getAproduct,
    addToCart,
    getCart,
}

export default productService