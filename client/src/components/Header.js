import React from "react";
import { Link } from "react-router-dom";
import UserLogOut from "./UserLogOut";

const Header = ({ role, user, setUser }) => {
  return (
    <header>
      <h1>Fruit Store</h1>
      <nav>
        {user && role === "customer" && (
          <>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/cart">Cart</Link>
            </p>
            <p>
              <Link to="/order-summary">Order Summary</Link>
            </p>
          </>
        )}
        {user && role === "owner" && (
          <>
            <p>
              <Link to="/dashboard">Dashboard</Link>
            </p>
            <p>
              <Link to="/all-orders">All Orders</Link>
            </p>
            <p>
              <Link to="/manage-fruits">Manage Fruits</Link>
            </p>
          </>
        )}
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
};

export default Header;
