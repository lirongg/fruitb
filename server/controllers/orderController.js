const Order = require('../models/orderModel');
const Fruit = require('../models/fruitModel');

async function createOrder(req, res) {
  
        const {customerName, fruits, totalAmount} = req.body
        const order = new Order({
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

module.exports = {createOrder, getOrders}