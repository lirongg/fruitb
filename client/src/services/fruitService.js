import axios from 'axios';

const URL = 'https://fruitb.onrender.com/api/fruits/'
// const URL = 'http://localhost:5001/api/fruits/';

const getFruits = () => {
    return axios.get(URL)
}

const createFruits = (fruit) => {
    return axios.post(`${URL}create`, fruit)
}

const updateQuantity = (id, quantity) => {
    return axios.put(`${URL}${id}`, {quantity})
}
export default {
    getFruits, updateQuantity, createFruits
}