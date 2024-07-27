import axios from 'axios';

const URL = 'http://localhost:5001/api/orders/'

const createOrder = (order) => {
    return axios.post(URL,order)
}
const getOrders = () => {
    return axios.get(URL)
}

export default {
    createOrder, getOrders
}