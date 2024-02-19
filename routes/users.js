// routes/users.js
const express = require('express');
const router = express.Router();

// Controladores
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, loginUser } = require('../controllers/users');

// Definición de rutas
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post("/login", loginUser)



module.exports = router;
