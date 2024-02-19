const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../db/users.json');
let users = [];

// Cargar datos desde el archivo al iniciar la aplicación
try {
  const usersData = fs.readFileSync(usersFilePath, 'utf-8');
  users = JSON.parse(usersData);
} catch (error) {
  console.error('Error al leer el archivo de users:', error.message);
}

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id == userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  users.push(newUser);

  // Guardar los datos actualizados en el archivo
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error al escribir en el archivo de users:', error.message);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  // Implementa la lógica de actualización según tus necesidades

  // Guardar los datos actualizados en el archivo
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    res.json(updatedUser);
  } catch (error) {
    console.error('Error al escribir en el archivo de users:', error.message);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  console.log(user)
  if (user) {
    res.json({ message: 'Usuario autenticado correctamente' });
  } else {
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
}

exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  // Implementa la lógica de eliminación según tus necesidades

  // Guardar los datos actualizados en el archivo
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error('Error al escribir en el archivo de users:', error.message);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
