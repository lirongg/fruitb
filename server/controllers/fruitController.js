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

module.exports = {getFruits, createFruits}