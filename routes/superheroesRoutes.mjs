import express from 'express';
import {
  obtenerTodosLosSuperheroesController,
  mostrarFormularioAgregarController,
  agregarSuperheroeController,
  mostrarFormularioEditarController,
  editarSuperheroeController,
  eliminarSuperheroeController
} from '../controllers/superheroesController.mjs';
import { agregarSuperheroeValidationRules, editarSuperheroeValidationRules } from '../validations/validationRules.mjs';
import { handleValidationErrors } from '../middleware/errorMiddleware.js';

const router = express.Router();

// Listar todos los superhéroes
router.get('/', obtenerTodosLosSuperheroesController);

// Mostrar formulario para agregar un nuevo superhéroe
router.get('/agregar', mostrarFormularioAgregarController);

// Agregar un nuevo superhéroe
router.post('/agregar', agregarSuperheroeValidationRules, handleValidationErrors, agregarSuperheroeController);

// Mostrar formulario para editar un superhéroe
router.get('/:id/editar', mostrarFormularioEditarController);

// Editar un superhéroe
router.put('/:id/editar', editarSuperheroeValidationRules, handleValidationErrors, editarSuperheroeController);

// Eliminar un superhéroe
router.delete('/:id', eliminarSuperheroeController);

export default router;
