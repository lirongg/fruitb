const mongoose = require('mongoose');

const fruitSchema = mongoose.Schema(
    {
        fruit: {
            type: String,
            require: true,
            unique: true,
        },

        price: {
            type: Number,
            required: true,
        },

        stock: {
            type: Number,
            required: true,
        },
    }
);

const Fruit = mongoose.model("Fruit", fruitSchema)

module.exports = Fruit;