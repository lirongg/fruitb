const Order = require('../models/orderModel');
const Fruit = require('../models/fruitModel');

async function createOrder(req, res) {
  
        const {orderId, customerName, fruits, totalAmount} = req.body
        const order = new Order({
            orderId,
            customerName,
            fruits,
            totalAmount,
        }) 
        try{
            const newOrder = await order.save();
        return res.status(200).json(newOrder);

    } catch(error) {
        console.error(error)
        return res.status(500).json({error: error.message});
    }
}

async function getOrders(req, res) {
    try{
        const orders = await Order.find().populate('fruits.fruit');
        res.json(orders);
    
} catch(error) {
    console.error(error)
    return res.status(500).json({error: error.message});
}
}

// Get all the sales

async function getSales(req, res) {
    try {
        const orders = await Order.aggregate([
            {
                $group: {
                    _id: {
                        day: { $dayOfMonth: "$createdAt" },
                        month: { $month: "$createdAt" },
                        year: { $year: "$createdAt" }
                    },
                    totalSales: { $sum: "$totalAmount" },
                    orders: { $push: "$$ROOT" }
                }
            },
            {
                $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 }
            }
        ]);

        res.json(orders);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}
// get order history

async function orderHistory (req, res) {
    try {
        const orders = await Order.find({ customerName: req.params.customerName }).populate('fruits.fruit');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// reorder

async function reOrder(req,res) {
    try {
        const order = await Order.findById(req.params.orderId).populate('fruits.fruit');
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        const newOrder = new Order({
            customerName: order.customerName,
            fruits: order.fruits.map(fruit => ({
                fruit: fruit.fruit._id,
                quantity: fruit.quantity
            })),
            totalAmount: order.totalAmount
        });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}



module.exports = {createOrder, getOrders, getSales, orderHistory, reOrder}