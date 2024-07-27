import React from "react";
import { Link } from 'react-router-dom';

const Header = ({ role, toggleRole }) => {
    return (
        <header>
            <h1>Fruit Store</h1>
            <nav>
                {role === 'customer' && <Link to="/">Home</Link>}
                {role === 'owner' && <Link to="/dashboard">Dashboard</Link>}
            </nav>
            <span>Welcome, {role}</span>
            <button onClick={toggleRole}>
                Switch to {role === 'customer' ? 'Owner' : 'Customer'}
            </button>
        </header>
    );
}

export default Header;
