
import sendRequest from './send-request';
const BASE_URL = 'https://fruitb.onrender.com/api/users/';
// const BASE_URL = 'http://localhost:5001/api/users/';

export function signUp(user) {
  return sendRequest(BASE_URL, 'POST', user);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}
