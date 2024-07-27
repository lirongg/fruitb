const Fruit = require('../models/fruitModel');

async function createFruits(req, res) {

    const {fruit, price, stock} = req.body
    const fruits = new Fruit({
        fruit, price, stock
    })
    try{
        const newFruit = await fruits.save();
        return res.status(200).json(fruits);

    } catch(error) {
        console.error(error)
        return res.status(500).json({error: error.message});
    }
}


async function getFruits(req, res) {
    try{
        const fruits = await Fruit.find()
        return res.status(200).json(fruits);

    } catch(error) {
        console.error(error)
        return res.status(500).json({error: error.message});
    }
}

async function updateQuantity(req, res) {
    try {
        const { id } = req.params; 
        const { quantity } = req.body; 

        if (typeof quantity !== 'number') {
            return res.status(400).json({ error: 'Invalid quantity' });
        }

    
        const updatedFruit = await Fruit.findByIdAndUpdate(
            id,
            { $inc: { stock: quantity } }, 
            { new: true } 
        );

        if (!updatedFruit) {
            return res.status(404).json({ error: 'Fruit not found' });
        }

        res.status(200).json(updatedFruit); 
    } catch (error) {
        console.error('Error updating quantity:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = {getFruits, createFruits, updateQuantity}