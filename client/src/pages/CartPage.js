import React, { useState } from "react";
import Cart from "../components/Cart";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <h1>Your Cart</h1>
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default CartPage;
