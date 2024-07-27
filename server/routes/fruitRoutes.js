const express = require('express');
const router = express.Router();
const fruitController = require('../controllers/fruitController');

router.get('/', fruitController.getFruits);
router.put('/:id', fruitController.updateQuantity);
router.post('/create', fruitController.createFruits)


module.exports = router;