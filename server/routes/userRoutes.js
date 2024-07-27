const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser);
router.post('/signin', userController.signIn);

module.exports = router;