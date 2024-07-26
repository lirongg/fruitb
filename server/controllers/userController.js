const User = require('../models/userModel');

async function createUser(req, res) {
  
        const {username, password, role} = req.body
        const user = new User({
            username,
            password,
            role,
        }) 
        try{
            const newUser = await user.save();
        return res.status(200).json(newUser);

    } catch(error) {
        console.error(error)
        return res.status(500).json({error: error.message});
    }
}

module.exports = {createUser}