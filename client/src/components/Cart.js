import React, { useState, useEffect } from 'react';
import orderService from '../services/orderService';
import fruitService from '../services/fruitService';

const Cart = ({ cartItems, setCartItems, username, fruitList, setFruitList }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalAmount(total);
  }, [cartItems]);

  const handleOrderSubmit = async () => {
    const order = {
      customerName: 'customer',
      fruits: cartItems.map(item => ({ fruit: item._id, quantity: item.quantity })),
      totalAmount,
    };

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
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      <button onClick={handleOrderSubmit}>Place Order</button>
    </div>
  );
};

export default Cart;
