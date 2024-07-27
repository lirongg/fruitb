const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");  

async function createUser(req, res) {
    const { username, password, role } = req.body;

    try {
        const user = new User({
            username,
            password,
            role,
        });

        const newUser = await user.save();
        return res.status(200).json(newUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}

async function signIn(req, res) {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username: username });  
        if (!user) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        res.json({ token: createJWT(user) });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}

function createJWT(user) {
    return jwt.sign(
        { userId: user._id, username: user.username, role: user.role },  // Include specific user details in the payload
        process.env.SECRET,  // Make sure SECRET is defined in your environment variables
        { expiresIn: "24h" }
    );
}

module.exports = { createUser, signIn };
