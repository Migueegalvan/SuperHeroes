// routes/usuarios.js
import express from 'express';
import { registerValidationRules } from '../validations/validationRules.mjs';
import { handleValidationErrors } from '../middleware/errorMiddleware.js';
import { validationResult } from 'express-validator';

const router = express.Router();

// Simulación de una base de datos de usuarios
let usuarios = [
  { id: 1, name: 'Alice', age: 38 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 }
];

// Middleware de autenticación para usuarios
import authMiddleware from '../middleware/authMiddleware.js';
router.use(authMiddleware);

// Obtener todos los usuarios
router.get('/', (req, res) => {
  res.send('Aquí está la lista de todos los usuarios');
});

// Obtener un usuario específico por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = usuarios.find(u => u.id === parseInt(id));
  if (user) {
    res.render('userProfile', { user });
  } else {
    res.status(404).send('Usuario no encontrado');
  }
});


// Crear un nuevo usuario con validaciones
router.post('/register', registerValidationRules, handleValidationErrors, (req, res) => {
  const nuevoUsuario = req.body;
  nuevoUsuario.id = usuarios.length + 1;
  usuarios.push(nuevoUsuario);
  res.send(`Nuevo usuario creado con los datos: ${JSON.stringify(nuevoUsuario)}`);
});

// Actualizar un usuario por ID
router.put('/:id', registerValidationRules, handleValidationErrors, (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;
  let user = usuarios.find(u => u.id === parseInt(id));
  if (user) {
    user = { ...user, ...datosActualizados };
    usuarios = usuarios.map(u => (u.id === parseInt(id) ? user : u));
    res.send(`Usuario con ID: ${id} ha sido actualizado con los datos: ${JSON.stringify(user)}`);
  } else {
    res.status(404).send('Usuario no encontrado');
  }
});

// Eliminar un usuario por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const usuarioExistente = usuarios.find(u => u.id === parseInt(id));
  if (usuarioExistente) {
    usuarios = usuarios.filter(u => u.id !== parseInt(id));
    res.send(`Usuario con ID: ${id} ha sido eliminado`);
  } else {
    res.status(404).send('Usuario no encontrado');
  }
});

export default router;
