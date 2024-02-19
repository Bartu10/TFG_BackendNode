// app.js
const express = require('express');
const app = express();

// Configuración de la aplicación
app.use(express.json());



console.log("Entra en APP.JS")
// Rutas
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');
const productOrderRoutes = require('./routes/productOrders');
const imageRoutes = require('./routes/images')


app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use('/productOrders', productOrderRoutes);
app.use('/images', imageRoutes)
module.exports = app