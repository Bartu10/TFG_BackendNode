// routes/productOrders.js
const express = require('express');
const router = express.Router();

// Controladores
const { getAllProductOrders, getProductOrderById, createProductOrder, updateProductOrder, deleteProductOrder } = require('../controllers/productOrders');

// Definición de rutas
router.get('/', getAllProductOrders);
router.get('/:id', getProductOrderById);
router.post('/', createProductOrder);
router.put('/:id', updateProductOrder);
router.delete('/:id', deleteProductOrder);

module.exports = router;