import React, { useState, useEffect } from "react";
import orderService from "../services/orderService";

const DashboardPage = ({ user }) => {
    const [fruitSales, setFruitSales] = useState([]);
    const [overallSales, setOverallSales] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await orderService.getSales();
                setFruitSales(response.data.fruitSales);
                setOverallSales(response.data.overallSales);
            } catch (err) {
                setError('Failed to fetch sales. Please try again later.');
                console.error(err);
            }
        };

        fetchSales();
    }, []);

    return (
        <div>
            <h1>Owner Dashboard</h1>

            <h2>Sales</h2>
            {error && <p>{error}</p>}
            <h3>Overall Sales: ${overallSales.toFixed(2)}</h3>
            {fruitSales.map((sale, index) => (
                <div key={index}>
                    <p>Fruit: {sale.fruit}</p>
                    <p>Total Sales: ${sale.totalSales.toFixed(2)}</p>
                    <p>Total Quantity: {sale.totalQuantity}</p>
                </div>
            ))}
        </div>
    );
};

export default DashboardPage;
