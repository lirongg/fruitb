import axios from 'axios';

const URL = 'http://localhost:5001/api/fruits/'

const getFruits = () => {
    return axios.get(URL)
}

const updateQuantity = (id, quantity) => {
    return axios.put(`${URL}${id}`, {quantity})
}
export default {
    getFruits, updateQuantity
}