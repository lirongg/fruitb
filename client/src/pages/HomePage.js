import React from "react";
import FruitList from '../components/FruitList';

const HomePage = ({ user, cartItems, setCartItems, fruitList, setFruitList }) => {
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
    </div>
  );
};

export default HomePage;
