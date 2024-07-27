import React from "react";
import { Link } from 'react-router-dom';
import UserLogOut from './UserLogOut';

const Header = ({ role, user, setUser }) => {
    // Log the entire user object to the console
    console.log('User object in Header:', user);

    return (
        <header>
            <h1>Fruit Store</h1>
            <nav>
                {user && role === 'customer' && <Link to="/">Home</Link>}
                {user && role === 'owner' && <Link to="/dashboard">Dashboard</Link>}
            </nav>
            {user ? (
                <>
                    <span>Welcome, {user.username}</span>
                    <UserLogOut user={user} setUser={setUser} />
                </>
            ) : (
                <Link to="/auth">Login</Link>
            )}
        </header>
    );
}

export default Header;
