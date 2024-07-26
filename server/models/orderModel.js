const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
        customerName: {
            type: String,
            require: true,
            unique: true,
        },

        fruits: [
            {
                fruit: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Fruit',
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                }
            }
        ],
        totalAmount: {
            type: Number,
            required: true
        },
        orderDate: {
            type: Date,
            default: Date.now,
        }

    }
);

const Order = mongoose.model("order", orderSchema)

module.exports = Order;