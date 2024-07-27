import './App.css';
import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from'react-router-dom';
import Header from './components/Header'
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [cartItems, setCartItems] = useState([])
  return (
    <Router>
    <Header />
    <div className="App">
      <header className="App-header">   </header>
      <h1>Fruit Store POS</h1>
      <Routes>
      <Route path ="/" element={<HomePage />} />
      <Route path ="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
