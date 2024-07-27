import React, { useState, useEffect } from "react";
import fruitService from "../services/fruitService";

const FruitList = ({ cartItems, setCartItems }) => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    fruitService
      .getFruits()
      .then((response) => {
        setFruits(response.data);
      })
      .catch((error) => {
        console.error("Error fetching fruits", error);
      });
  }, []);

  const handleAddToCart = (fruit) => {
    const existingItem = cartItems.find((item) => item._id === fruit._id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item._id === fruit._id
            ? { ...existingItem, quantity: existingItem.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...fruit, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h1>Available Fruits</h1>
      <ul>
        {fruits.length > 0?(
          fruits.map((fruit) => (
          <li key={fruit._id}>
            {fruit.fruit} - ${fruit.price.toFixed(2)} (Stock:{fruit.stock})
            <button onClick={() => handleAddToCart(fruit)}>Add to Cart</button>
          </li>
        ))
      ) : (
        <p>No fruits available</p>)}
      </ul>
    </div>
  );
};

export default FruitList;
