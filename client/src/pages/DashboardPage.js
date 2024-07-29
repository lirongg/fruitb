import React, { useState, useEffect } from "react";
import orderService from "../services/orderService";

const DashboardPage = ({ user }) => {
    const [sales, setSales] = useState([]);
    const [error, setError] = useState(null);

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

        fetchSales();
    }, []);

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
        </div>
    );
};

export default DashboardPage;
