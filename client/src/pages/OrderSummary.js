import React, { useState, useEffect } from "react";
import orderService from "../services/orderService";

const OrderSummary = ({ user }) => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await orderService.getOrders();
        setOrders(response.data);
      } catch (err) {
        setError('Failed to fetch orders. Please try again later.');
        console.error(err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Order Confirmed</h1>
      {error && <p>{error}</p>}
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <h3>Order ID: {order.orderId}</h3>
            <h3>Order by: {order.customerName}</h3>
            <ul>
              {order.fruits.map(fruit => (
                <li key={fruit._id}>
                  Fruit: {fruit.fruit.fruit} (Price: ${fruit.fruit.price.toFixed(2)}) - Quantity: {fruit.quantity}
                </li>
              ))}
            </ul>
            <p>Total Amount: ${order.totalAmount.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSummary;
