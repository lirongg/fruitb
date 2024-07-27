import axios from 'axios';

const URL = 'http://localhost:5001/api/users/'

const createUser = (user) => {
    return axios.post(URL,user)
}

export default {
    createUser
}