import React, { useState, useEffect } from "react";
import fruitService from "../services/fruitService";

const FruitList = ({ cartItems, setCartItems }) => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fruitService
      .getFruits()
      .then((response) => {
        setFruits(response.data.map(fruit => ({ ...fruit, quantity: fruit.stock })));
      })
      .catch((error) => {
        console.error("Error fetching fruits", error);
      });
  }, []);

  const handleAddToCart = (fruitToAdd) => {
    const existingItem = cartItems.find(item => item._id === fruitToAdd._id);
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item._id === fruitToAdd._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...fruitToAdd, quantity: 1 }]);
    }

    setFruits(
      fruits.map(fruit =>
        fruit._id === fruitToAdd._id
          ? { ...fruit, stock: fruit.stock - 1 }
          : fruit
      )
    );
  };

  return (
    <div>
      <h1>Available Fruits</h1>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit._id}>
            {fruit.fruit} - ${fruit.price.toFixed(2)} (Stock: {fruit.stock})
            <button onClick={() => handleAddToCart(fruit)} disabled={fruit.stock <= 0}>
              Add to Cart
            </button>
          </li>
        ))}
        {fruits.length === 0 && <p>No fruits available</p>}
      </ul>
    </div>
  );
};

export default FruitList;
