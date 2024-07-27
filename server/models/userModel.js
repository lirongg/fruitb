const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6;

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
        },

        password: {
            type: String,
            trim:true,
            minlength: 3,
            required: true,
        },

        role: {
            type: String,
            enum: ['customer', 'owner'],
            default: 'customer'
        },
    }
);

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  });
  

const User = mongoose.model("user", userSchema)

module.exports = User;