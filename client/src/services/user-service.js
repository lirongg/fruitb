import usersAPI from './userService';
import axios from 'axios';

function isValidToken(token) {
  if (typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 3) {
    return false;
  }
  try {
    atob(parts[1]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export function getToken() {
  const token = localStorage.getItem('token');
  if (!token || !isValidToken(token)) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
  
}


export function logOut() {
  localStorage.removeItem('token');
}

export async function registerOrLoginUser(userData, isSignup) {
  try {
    const BASE_URL = 'http://localhost:5001/api/users/';
    const url = isSignup ? `${BASE_URL}` : `${BASE_URL}signin`;
    const response = await axios.post(url, userData);
    return response.data; 
  } catch (error) {
    console.error("API Error:", error); 
    throw error;
  }
}

export async function login(credentials) {
  const user = await registerOrLoginUser(credentials, false);
  return user;
}

export default {
  registerOrLoginUser,
  getToken,
  getUser,
  logOut,
  login
}
