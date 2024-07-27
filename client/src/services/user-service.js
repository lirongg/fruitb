// Serice modules hold the code that implements
// "business"/application logic
// Service methods often depend upon or use
// methods in the API modules

// Import all named exports
import * as usersAPI from './userService';

export async function signUp(user) {
  // Delegate the AJAX request to the users-api.js
  // module.
  const token = await usersAPI.signUp(user);
  localStorage.setItem('token', token);
  return getUser();
}

function isValidToken(token) {
  if (typeof token !== 'string') return false;
  const parts = token.split('.');
  return parts.length === 3 && parts.every(part => {
    try {
      atob(part);
      return true;
    } catch (error) {
      return false;
    }
  });
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
  return token ?
    JSON.parse(atob(token.split('.')[1])).user
    :
    null;
}

export function logOut() {
  localStorage.removeItem('token');
  console.log('User data cleared from localStorage.');
}

export async function login(credentials) {
  // Delegate the AJAX request to the users-api.js
  // module.
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token);
  return getUser();
}
