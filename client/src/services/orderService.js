import axios from 'axios';

const URL = 'http://localhost:5001/api/orders/';

const createOrder = (order) => {
    return axios.post(URL, order);
}

const reOrder = (orderId) => {
    return axios.post(`${URL}reorder/${orderId}`);
}

const getOrders = () => {
    return axios.get(URL);
}



const getSales = () => {
    return axios.get(`${URL}sales`);
}

const orderHistory = (customerName) => {
    return axios.get(`${URL}history/${customerName}`);
}

export default {
    createOrder,
    getOrders,
    reOrder,
    getSales,
    orderHistory
}
