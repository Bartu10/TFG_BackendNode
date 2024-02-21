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

  const user = users.find((u) => u.id == userId);

  user.name = updatedUser.name;
  user.email = updatedUser.email;
  user.admin = updatedUser.admin;
  user.username = updatedUser.username;
  user.password = updatedUser.password;

  console.log(user)


  // Guardar los datos actualizados en el archivo
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    res.json(user);
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
    res.json({ user: user });
  } else {
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
}


exports.emailUser = (req, res) => {
  const email = req.params.email;
  const user = users.find((u) => u.email === email);
  console.log(user)
  if (user) {
    res.json({ user: user });
  } else {
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
}


exports.updateImageUser = (req, res) => {
  const userId = req.params.id;
  const imageid = req.body;
  console.log(req.body)


  // Implementa la lógica de actualización según tus necesidades

  const user = users.find((u) => u.id == userId);
  console.log(user.imageid)
  user.imageid = imageid.imageid;
  console.log(user.imageid)
  console.log(user)
  // Guardar los datos actualizados en el archivo
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    res.status(200).json(user);
  } catch (error) {
    console.error('Error al escribir en el archivo de users:', error.message);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}


exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  // Implementa la lógica de eliminación según tus necesidades

  const user = users.findIndex((u) => u.id == userId);

  if (user !== -1) {
    // Eliminar el usuario del array usando splice
    users.splice(user, 1);

    // Guardar los datos actualizados en el archivo
    try {
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
      res.json({ user: user });
    } catch (error) {
      console.error('Error al escribir en el archivo de users:', error.message);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  } else {
    // El usuario no se encontró
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
};
