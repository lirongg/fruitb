import React, { useState } from "react";
import FruitList from "./FruitList";
import Cart from "../components/Cart"

const Dashboard = () => {
  const [cartItems, setCartItems]= useState([])
  return (
    <div>
      <h1>Dashboard</h1>
      <FruitList cartItems={cartItems} setCartItems={setCartItems}/>
      <Cart cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  );
};

export default Dashboard;
