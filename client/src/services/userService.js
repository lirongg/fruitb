import axios from 'axios';

const BASE_URL = 'http://localhost:5001/api/users/';

const createUser = (user) => {
    return axios.post(`${BASE_URL}`, user);
}

const signIn = (user) => {
    return axios.post(`${BASE_URL}signin`, user);
}


export default {
    createUser,
    signIn,
}
