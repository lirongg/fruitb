import React, {useState} from 'react';
import userService from '../services/userService';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            //add login logic
        } catch (error) {
            console.error('Login failed:', error);
        }


    }
    return(
        <div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
        <label>
        Username:
        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>
        </label>
        <label>
        Password:
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </label>
        <button type="submit">Login</button>
   
        </form></div>
    )
}

export default LoginPage