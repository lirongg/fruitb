import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

const AuthPage = ({ setUser }) => {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (user) => {
    setUser(user);
    if (user.role === 'owner') {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <main className="AuthPage">
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <LoginForm setUser={handleLogin} /> : <SignUpForm setUser={handleLogin} />}
    </main>
  );
};

export default AuthPage;
