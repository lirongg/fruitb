const Order = require('../models/orderModel');

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

module.exports = {createOrder}