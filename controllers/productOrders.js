const fs = require('fs');
const path = require('path');

const productOrdersFilePath = path.join(__dirname, '../db/productOrders.json');
let productOrders = [];

// Cargar datos desde el archivo al iniciar la aplicación
try {
  const productOrdersData = fs.readFileSync(productOrdersFilePath, 'utf-8');
  productOrders = JSON.parse(productOrdersData);
} catch (error) {
  console.error('Error al leer el archivo de productOrders:', error.message);
}

exports.getAllProductOrders = (req, res) => {
  res.json(productOrders);
};

exports.getProductOrderById = (req, res) => {
  const productOrderId = req.params.id;
  const productOrder = productOrders.find((po) => po.id == productOrderId);

  if (productOrder) {
    res.json(productOrder);
  } else {
    res.status(404).json({ message: 'Producto en el pedido no encontrado' });
  }
};

exports.createProductOrder = (req, res) => {
  const newProductOrder = req.body;
  productOrders.push(newProductOrder);


  const ultimoElemento = [...productOrders].pop();
  console.log(ultimoElemento);
  newProductOrder.id = ultimoElemento.id + 1;
  productOrders.push(newProductOrder);

  // Guardar los datos actualizados en el archivo
  try {
    fs.writeFileSync(productOrdersFilePath, JSON.stringify(productOrders, null, 2));
    res.status(201).json(newProductOrder);
  } catch (error) {
    console.error('Error al escribir en el archivo de productOrders:', error.message);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.updateProductOrder = (req, res) => {
  const productOrderId = req.params.id;
  const updatedProductOrder = req.body;

  // Implementa la lógica de actualización según tus necesidades

  // Guardar los datos actualizados en el archivo
  try {
    fs.writeFileSync(productOrdersFilePath, JSON.stringify(productOrders, null, 2));
    res.json(updatedProductOrder);
  } catch (error) {
    console.error('Error al escribir en el archivo de productOrders:', error.message);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.deleteProductOrder = (req, res) => {
  const productOrderId = req.params.id;

  // Implementa la lógica de eliminación según tus necesidades

  // Guardar los datos actualizados en el archivo
  try {
    fs.writeFileSync(productOrdersFilePath, JSON.stringify(productOrders, null, 2));
    res.json({ message: 'Producto en el pedido eliminado correctamente' });
  } catch (error) {
    console.error('Error al escribir en el archivo de productOrders:', error.message);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
