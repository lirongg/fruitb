import React, { useState, useEffect } from "react";
import fruitService from "../services/fruitService";

const DashboardPage = ({ user }) => {
    const [sales, setSales] = useState([]);
    const [error, setError] = useState(null);
    const [newFruit, setNewFruit] = useState({ fruit: '', price: '', stock: '' });
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await orderService.getSales();
                setSales(response.data);
            } catch (err) {
                setError('Failed to fetch sales. Please try again later.');
                console.error(err);
            }
        };

        const fetchFruits = async () => {
            try {
                const response = await fruitService.getFruits();
                setFruits(response.data);
            } catch (err) {
                setError('Failed to fetch fruits. Please try again later.');
                console.error(err);
            }
        };

        fetchSales();
        fetchFruits();
    }, []);

    const handleAddFruit = async () => {
        try {
            const response = await fruitService.createFruits(newFruit);
            setFruits([...fruits, response.data]);
            setNewFruit({ fruit: '', price: '', stock: '' });
        } catch (err) {
            setError('Failed to add fruit. Please try again later.');
            console.error(err);
        }
    };

    const handleStockChange = async (id, quantity) => {
        try {
            const response = await fruitService.updateQuantity(id, quantity);
            setFruits(fruits.map(fruit => fruit._id === id ? response.data : fruit));
        } catch (err) {
            setError('Failed to update stock. Please try again later.');
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Owner Dashboard</h1>

            <h2>Sales</h2>
            {error && <p>{error}</p>}
            {sales.map((sale, index) => (
                <div key={index}>
                    <p>Date: {`${sale._id.year}-${sale._id.month}-${sale._id.day}`}</p>
                    <p>Total Sales: ${sale.totalSales}</p>
                </div>
            ))}

            <h2>Add New Fruit</h2>
            <input
                type="text"
                placeholder="Name"
                value={newFruit.fruit}
                onChange={e => setNewFruit({ ...newFruit, fruit: e.target.value })}
            />
            <input
                type="number"
                placeholder="Price"
                value={newFruit.price}
                onChange={e => setNewFruit({ ...newFruit, price: e.target.value })}
            />
            <input
                type="number"
                placeholder="Stock"
                value={newFruit.stock}
                onChange={e => setNewFruit({ ...newFruit, stock: e.target.value })}
            />
            <button onClick={handleAddFruit}>Add Fruit</button>

            <h2>Amend Stock Levels</h2>
            {fruits.map(fruit => (
                <div key={fruit._id}>
                    <p>{fruit.fruit}</p>
                    <input
                        type="number"
                        value={fruit.stock}
                        onChange={e => handleStockChange(fruit._id, parseInt(e.target.value) - fruit.stock)}
                    />
                </div>
            ))}
        </div>
    );
};

export default DashboardPage;
