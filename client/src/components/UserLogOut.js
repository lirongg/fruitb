import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../services/user-service';

function UserLogOut({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogOut() {
    console.log('Logging out...');
    logOut();
    setUser(null);
    console.log('User set to null.');
    navigate('/auth'); 
  }

  return (
    <div className="UserLogOut">
      <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
    </div>
  );
}

export default UserLogOut;
