// controllers/products.js
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../db/products.json');

let products = [];

// Cargar productos desde el archivo
function loadProducts() {
  try {
    const data = fs.readFileSync(productsFilePath, 'utf8');
    products = JSON.parse(data);
  } catch (error) {
    console.error('Error al cargar productos:', error.message);
    products = [];
  }
}

// Guardar productos en el archivo
function saveProducts() {
  try {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2), 'utf8');
  } catch (error) {
    console.error('Error al guardar productos:', error.message);
  }
}

// Obtener todos los productos
exports.getAllProducts = (req, res) => {
  loadProducts();
  res.json(products);
};

// Obtener un producto por ID
exports.getProductById = (req, res) => {
  loadProducts();
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};

// Crear un nuevo producto
exports.createProduct = (req, res) => {
  loadProducts();
  const newProduct = req.body;
  newProduct.id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
  products.push(newProduct);
  saveProducts();
  res.status(201).json(newProduct);
};

// Actualizar un producto por ID
exports.updateProduct = (req, res) => {
  loadProducts();
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;

  // Buscar el índice del producto
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex !== -1) {
    // Actualizar el producto
    products[productIndex] = { ...products[productIndex], ...updatedProduct };
    saveProducts();
    res.json(products[productIndex]);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};

// Eliminar un producto por ID
exports.deleteProduct = (req, res) => {
  loadProducts();
  const productId = parseInt(req.params.id);

  // Filtrar los productos para excluir el que tiene el ID especificado
  const filteredProducts = products.filter((p) => p.id !== productId);

  if (filteredProducts.length < products.length) {
    // Si se eliminó algún producto
    products = filteredProducts;
    saveProducts();
    res.json({ message: 'Producto eliminado correctamente' });
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};
