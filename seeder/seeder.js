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
const products = Array.from({ length: 50 }, () => productFactory.generate());
const orders = Array.from({ length: 20 }, () => orderFactory.generate(users[0]));
const productOrders = Array.from({ length: 10 }, () => productOrderFactory.generate(orders[0], products[0]));

const dbDirectory = 'C:/Users/Javier Bartus/Documents/db';
if (!fs.existsSync(dbDirectory)) {
  fs.mkdirSync(dbDirectory);
}

// Rutas de los archivos
const usersFilePath = `${dbDirectory}/users.json`;
const productsFilePath = `${dbDirectory}/products.json`;
const ordersFilePath = `${dbDirectory}/orders.json`;
const productOrdersFilePath = `${dbDirectory}/productOrders.json`;



// Guardar en archivos JSON
fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
fs.writeFileSync(productOrderFactory, JSON.stringify(productOrders, null, 2));

console.log('Datos generados y guardados correctamente.');