import React, { useState, useEffect } from 'react';
import orderService from '../services/orderService';
import fruitService from '../services/fruitService';

const Cart = ({ cartItems, setCartItems, username, fruitList, setFruitList }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    console.log('Username in Cart component:', username);
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalAmount(total);
  }, [cartItems, username]);

  const handleOrderSubmit = async () => {
    const order = {
      customerName: username, // Use the passed username here
      fruits: cartItems.map(item => ({ fruit: item._id, quantity: item.quantity })),
      totalAmount,
    };
    console.log('Order customerName:', username);

    try {
      const response = await orderService.createOrder(order);
      if (response.status === 200) {
        alert('Order placed successfully!');
        setCartItems([]);
        await updateFruitQuantities(order.fruits);
      } else {
        alert('Failed to place the order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing the order. Please try again');
    }
  };

  const updateFruitQuantities = async (fruits) => {
    try {
      const updates = fruits.map(fruit => {
        return fruitService.updateQuantity(fruit.fruit, -fruit.quantity);
      });
      await Promise.all(updates);

      const updatedList = await fruitService.getFruits();
      setFruitList(updatedList.data);
    } catch (error) {
      console.error('Error updating fruit quantities:', error);
      alert('Error updating fruit quantities. Please try again');
    }
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item._id}>
            {item.fruit} = $ {item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      <button onClick={handleOrderSubmit}>Place Order</button>
    </div>
  );
};

export default Cart;