import React from "react";

const OrderConfirmation = ({ order }) => {
  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>
        Thank you, {order.customerName}! Your order has been placed
        successfully.
      </p>
      <h2>Order Details:</h2>
      <ul>
        {order.fruits.map((item, index) => (
          <li key={index}>
            Fruit ID: {item.fruit} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total Amount: ${order.totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default OrderConfirmation;
