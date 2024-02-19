// routes/products.js
const express = require('express');
const router = express.Router();

// Controladores
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/products');

// Definición de rutas
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);


module.exports = router;
