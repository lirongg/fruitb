const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            enum: ['customer', 'owner'],
            default: 'customer'
        },
    }
);

const User = mongoose.model("user", userSchema)

module.exports = User;