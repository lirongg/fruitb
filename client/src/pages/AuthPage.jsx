import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import { useNavigate } from 'react-router-dom';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (user) => {
    setUser(user);
    navigate(user.role === 'owner' ? '/dashboard' : '/');
  };

  return (
    <main className="AuthPage">
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={handleLogin} /> : <SignUpForm setUser={handleLogin} />}
    </main>
  );
}
