import React, { useState } from 'react';
import * as usersService from '../services/userService';

function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log('Submitted credentials:', credentials);
    try {
      const user = await usersService.login(credentials);
      console.log('Logged in user:', user); 
      setUser(user); 
    } catch (err) {
      console.error('Login error:', err);
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" name="username" value={credentials.username} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}

export default LoginForm;
