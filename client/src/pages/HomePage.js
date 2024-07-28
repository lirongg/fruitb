import React, { useState } from "react";
import FruitList from '../components/FruitList';
import Cart from '../components/Cart';
import OrderSummary from './OrderSummary';

const HomePage = ({ user }) => {
  const [cartItems, setCartItems] = useState([]);
  const [fruitList, setFruitList] = useState([]);

  console.log('User in HomePage:', user);

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
      <FruitList addToCart={addToCart} cartItems={cartItems} setCartItems={setCartItems} user={user} />
      {user ? (
        <>
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            fruitList={fruitList}
            setFruitList={setFruitList}
            username={user.username}
          />
          <OrderSummary cartItems={cartItems} setCartItems={setCartItems} user={user}/>
        </>
      ) : (
        <p>Please log in to view your cart and order history.</p>
      )}
    </div>
  );
};

export default HomePage;
