import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import CartPage from './pages/CartPage';
import ManageFruits from './pages/ManageFruits';
import OrderSummary from './pages/OrderSummary';
import AllOrders from './pages/AllOrders';
import AuthPage from './pages/AuthPage';
import { getUser } from './services/user-service';

function App() {
  const [user, setUser] = useState(getUser());
  const [role, setRole] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [fruitList, setFruitList] = useState([]);

  useEffect(() => {
    if (user) {
      setRole(user.role);
    }
  }, [user]);

  useEffect(() => {
    console.log('User in App:', user);
    console.log('Role in App:', role);
  }, [user, role]);

  return (
    <div className="App">
      <Router>
        <Header user={user} setUser={setUser} role={role} />
        <Routes>
          <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          <Route path="/" element={<HomePage user={user} cartItems={cartItems} setCartItems={setCartItems} fruitList={fruitList} setFruitList={setFruitList} />} />
          <Route path="/cart" element={<CartPage user={user} cartItems={cartItems} setCartItems={setCartItems} fruitList={fruitList} setFruitList={setFruitList} />} />
          <Route path="/order-summary" element={role === 'customer' ? <OrderSummary user={user} />: <Navigate to="/"/>} />
          <Route path="/dashboard" element={role === 'owner' ? <DashboardPage user={user} /> : <Navigate to="/" />} />
          <Route path="/all-orders" element={role === 'owner' ? <AllOrders user={user} /> : <Navigate to="/" />} />
          <Route path="/manage-fruits" element={role === 'owner' ? <ManageFruits user={user} /> : <Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
