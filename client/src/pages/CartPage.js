import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import OrderConfirmed from './components/OrderConfirmed'; // Ensure the import path is correct
import CartPage from './pages/CartPage'; // Ensure you've imported CartPage
import { getUser } from './services/user-service';

function App() {
  const [user, setUser] = useState(getUser());
  const [cartItems, setCartItems] = useState([]);
  const [fruitList, setFruitList] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header role={user?.role} />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          {user?.role === 'owner' && <Route path="/dashboard" element={<DashboardPage user={user} />} />}
          {user?.role === 'customer' && (
            <>
              <Route path="/cart" element={<CartPage user={user} cartItems={cartItems} setCartItems={setCartItems} fruitList={fruitList} setFruitList={setFruitList} />} />
              <Route path="/order-confirmation" element={<OrderConfirmed order={{ customerName: 'customer', fruits: [], totalAmount: 0 }} />} />
            </>
          )}
          <Route path="/*" element={<LoginPage setUser={setUser} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
