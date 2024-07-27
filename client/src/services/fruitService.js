import axios from 'axios';

const URL = 'http://localhost:5001/api/fruits/'

const getFruits = () => {
    return axios.get(URL)
}

export default {
    getFruits
}