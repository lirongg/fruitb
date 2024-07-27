import React, { useState } from "react";
import FruitList from '../components/FruitList';
import Cart from '../components/Cart';
import OrderSummary from './OrderSummary';

const HomePage = ({ user}) => {
  const [cartItems, setCartItems] = useState([]);
  const [fruitList, setFruitList] = useState([]);
  
  const addToCart = (fruit) => {
    const existingItem = cartItems.find(item => item._id === fruit._id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item._id === fruit._id ? { ...existingItem, quantity: existingItem.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...fruit, quantity: 1 }]);
    }
  };

  return (
    <div>
      <FruitList addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} fruitList={fruitList} setFruitList={setFruitList} />
      <OrderSummary cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default HomePage;
