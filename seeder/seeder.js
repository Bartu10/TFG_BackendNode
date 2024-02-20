const fs = require('fs');
const UserFactory = require('../factories/UserFactory');
const OrderFactory = require('../factories/OrderFactory');
const ProductFactory = require('../factories/ProductFactory');
const ProductOrderFactory = require('../factories/ProductOrderFactory');

const userFactory = new UserFactory();
const productOrderFactory = new ProductOrderFactory();
const productFactory = new ProductFactory();
const orderFactory = new OrderFactory();

const users = Array.from({ length: 50 }, () => userFactory.generate());
const orders = Array.from({ length: 20 }, () => orderFactory.generate(users[0]));
const products = Array.from({ length: 50 }, () => productFactory.generate());
const productOrders = Array.from({ length: 10 }, () => productOrderFactory.generate(orders[0], products[0]));

users.push(userFactory.generateAdmin());

// Rutas de los archivos
const path = require('path');

const usersFilePath = path.resolve(__dirname, '../db/users.json');
const productsFilePath = path.resolve(__dirname, '../db/products.json');
const ordersFilePath = path.resolve(__dirname, '../db/orders.json');
const productOrdersFilePath = path.resolve(__dirname, '../db/productOrders.json');


// Guardar en archivos JSON
fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
fs.writeFileSync(productOrdersFilePath, JSON.stringify(productOrders, null, 2));

console.log('Datos generados y guardados correctamente.');