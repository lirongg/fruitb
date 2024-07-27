const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");  

async function signUp(req, res) {
    const { username, password, role } = req.body;

    try {
        console.log('Plain text password during signup:', password); // Debug log to show plain text password
        const user = new User({
            username,
            password,  // Store plain text password (for temporary debugging purposes only)
            role,
        });

        const newUser = await user.save();
        const token = createJWT(newUser);
        return res.status(200).json({ token, username: newUser.username, role: newUser.role, password: newUser.password });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}

async function login(req, res) {
    const { username, password } = req.body;

    try {
        console.log('Plain text password during login:', password); // Debug log to show plain text password
        const user = await User.findOne({ username: username });
        if (!user) {
            console.log('User not found');
            return res.status(400).json({ error: "Invalid username or password" });
        }

        console.log('Stored plain text password:', user.password);
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        console.log('User found and password matches:', user);
        const token = createJWT(user);
        return res.status(200).json({ token, username: user.username, role: user.role });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
}

function createJWT(user) {
    return jwt.sign(
        { userId: user._id, username: user.username, role: user.role },
        process.env.SECRET,
        { expiresIn: "24h" }
    );
}

module.exports = { signUp, login };
