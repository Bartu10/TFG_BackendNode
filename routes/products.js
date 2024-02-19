// routes/products.js
const express = require('express');
const router = express.Router();



// Controladores
const { 
    getAllProducts, 
    getProductById, 
    createProduct, 
    updateProduct, 
    deleteProduct,
    getProductsByYear,
    getRetroProducts,
    getProductsByTeam,
    getProductsByState,
  } = require('../controllers/products');

// Definición de rutas
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

// Filtros

router.get('/year/:yr', getProductsByYear);
router.get('/retro/:retro', getRetroProducts);
router.get('/team/:team', getProductsByTeam);
router.get('/state/:state', getProductsByState);



module.exports = router;
