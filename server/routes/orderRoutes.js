const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.createOrder);
router.post('/reorder/:orderId', orderController.reOrder);
router.get('/', orderController.getOrders);
router.get('/sales', orderController.getSales);
router.get('/history/:customerName', orderController.orderHistory);


module.exports = router;