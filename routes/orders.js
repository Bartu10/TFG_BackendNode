// routes/orders.js
const express = require('express');
const router = express.Router();

// Controladores
const { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } = require('../controllers/orders');

// Definición de rutas
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.post('/', createOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

module.exports = router;
