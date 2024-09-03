import axios from "axios";

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/products',
    timeout : 3000,
    timeoutErrorMessage:'Your connection is slow'
})

export default instance