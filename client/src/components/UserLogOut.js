import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../services/user-service';

export default function UserLogOut({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogOut() {
    console.log('Logging out...');
    logOut();
    setUser(null);
    console.log('User set to null.');
    navigate('/auth'); // Redirect to the login page or home page after logout
  }

  return (
    <div className="UserLogOut">
      <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
    </div>
  );
}
