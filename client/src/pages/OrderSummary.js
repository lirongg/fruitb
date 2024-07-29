import React, { useState, useEffect } from "react";
import orderService from "../services/orderService";

const OrderSummary = ({ user }) => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('User in OrderSummary:', user); // Log the user object

    if (user) {
      const fetchOrders = async () => {
        try {
          console.log('Fetching orders for user:', user.username);
          const response = await orderService.orderHistory(user.username);
          console.log('Orders fetched:', response.data);
          setOrders(response.data);
        } catch (err) {
          console.error('Error fetching orders:', err);
          setError('Failed to fetch orders. Please try again later.');
        }
      };

      fetchOrders();
    }
  }, [user]);

  const handleReOrder = async (orderId) => {
    try {
      console.log('Re-ordering order ID:', orderId);
      const response = await orderService.reOrder(orderId);
      console.log('Reorder successful:', response.data); // Log the reorder response
      setOrders([...orders, response.data]); // Update orders with the new order
    } catch (err) {
      console.error('Error during reorder:', err);
      setError('Failed to reorder. Please try again later.');
    }
  };

  if (!user) {
    return <div>Please log in to view your order history.</div>;
  }

  return (
    <div>
      <h2>Order History</h2>
      {error && <p>{error}</p>}
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <h3>Order ID: {order._id}</h3>
            <h3>Order by: {order.customerName}</h3>
            <ul>
              {order.fruits.map(fruit => (
                <li key={fruit._id}>
                  Fruit: {fruit.fruit.name} (Price: ${fruit?.fruit?.price?.toFixed(2) || '0.00'}) - Quantity: {fruit.quantity}
                </li>
              ))}
            </ul>
            <p>Total Amount: ${order.totalAmount.toFixed(2)}</p>
            <button onClick={() => handleReOrder(order._id)}>Re-order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSummary;
