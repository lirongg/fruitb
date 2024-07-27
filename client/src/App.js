import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [role, setRole] = useState('customer'); // Default role

  const toggleRole = () => {
    setRole(role === 'customer' ? 'owner' : 'customer');
  };

  return (
    <div className="App">
      <Router>
        <Header role={role} toggleRole={toggleRole} />
        <Routes>
          {role === 'customer' && <Route path="/" element={<HomePage />} />}
          {role === 'owner' && <Route path="/dashboard" element={<DashboardPage />} />}
          {/* Redirect user based on the role */}
          <Route path="*" element={<Navigate to={role === 'customer' ? "/" : "/dashboard"} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
