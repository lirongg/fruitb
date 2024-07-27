import React, {useState} from "react";
import FruitList from '../components/FruitList'
import Cart from '../components/Cart'


const HomePage = () => {
  const [cartItems, setCartItems]= useState([]);
  const addToCart =(fruit) => {
    const existingItem = cartItems.find(item=> item._id === fruit._id);
    if (existingItem) {
      setCartItems = (cartItems.map(item =>
        item._id === fruit._id ? {...existingItem, quantity: existingItem.quantity +1}: item
      )
      )
    } else {
      setCartItems([...cartItems, {...fruit,quantity:1}])
    }
  }
  return (
    <div>
      <FruitList addToCart={addToCart} />
      <Cart cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  );
};

export default HomePage;
