const fs = require('fs');
const path = require('path');

const ordersFilePath = path.join(__dirname, '../db/orders.json');
let orders = [];

// Cargar datos desde el archivo al iniciar la aplicación
try {
  const ordersData = fs.readFileSync(ordersFilePath, 'utf-8');
  orders = JSON.parse(ordersData);
} catch (error) {
  console.error('Error al leer el archivo de orders:', error.message);
}

exports.getAllOrders = (req, res) => {
  res.json(orders);
};

exports.getOrderById = (req, res) => {
  const orderId = req.params.id;
  const order = orders.find((o) => o.id == orderId);

  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: 'Pedido no encontrado' });
  }
};

exports.createOrder = (req, res) => {
  const newOrder = req.body;


// Obtener el último elemento usando el operador de propagación
const ultimoElemento = [...orders].pop();
  console.log(ultimoElemento);
  newOrder.id = ultimoElemento.id + 1;
  orders.push(newOrder);

  


  // Guardar los datos actualizados en el archivo
  try {
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error al escribir en el archivo de orders:', error.message);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.updateOrder = (req, res) => {
  const orderId = req.params.id;
  const updatedOrder = req.body;

  // Implementa la lógica de actualización según tus necesidades

  // Guardar los datos actualizados en el archivo
  try {
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
    res.json(updatedOrder);
  } catch (error) {
    console.error('Error al escribir en el archivo de orders:', error.message);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.deleteOrder = (req, res) => {
  const orderId = req.params.id;

  // Implementa la lógica de eliminación según tus necesidades

  // Guardar los datos actualizados en el archivo
  try {
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
    res.json({ message: 'Pedido eliminado correctamente' });
  } catch (error) {
    console.error('Error al escribir en el archivo de orders:', error.message);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
