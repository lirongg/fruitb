const mongoose = require('mongoose');
const Counter = require('./counterModel'); // Ensure the path is correct

const orderSchema = mongoose.Schema({
    orderId: {
        type: String,
        unique: true, // Ensures each order ID is unique
    },
    customerName: {
        type: String,
        required: true
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
});

// Pre-save hook to handle orderId creation
orderSchema.pre('save', async function(next) {
    if (this.isNew) {
        const result = await Counter.findByIdAndUpdate(
            { _id: 'orderId' }, 
            { $inc: { seq: 1 } }, 
            { new: true, upsert: true }
        );
        const count = result.seq;
        this.orderId = count.toString().padStart(3, '0'); // Converts number to string with leading zeros
    }
    next();
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
