import React, { useState, useEffect } from 'react';
import Cart from '../components/Cart';
import fruitService from '../services/fruitService';

const CartPage = ({ user, cartItems, setCartItems, fruitList, setFruitList }) => {
  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await fruitService.getFruits();
        setFruitList(response.data); // Assuming the API returns the data array directly
      } catch (error) {
        console.error('Failed to fetch fruits:', error);
      }
    };

    fetchFruits();
  }, [setFruitList]);

  console.log('User in CartPage:', user);

  return (
    <div>
      <h2>Your Cart</h2>
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        username={user ? user.username : 'Guest'}
        fruitList={fruitList}
        setFruitList={setFruitList}
      />
    </div>
  );
};

export default CartPage;
