import React, { useState, useEffect } from "react";
import fruitService from "../services/fruitService";

const FruitList = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    fruitService.getFruits().then((response) => {
      setFruits(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Available Fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.fruit} - ${fruit.price.toFixed(2)} (Stock:{fruit.stock})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
