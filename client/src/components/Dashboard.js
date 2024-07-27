import React from "react";
import FruitList from "./FruitList";

const Dashboard = ({ addToCart }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <FruitList addToCart={addToCart} />
    </div>
  );
};

export default Dashboard;
