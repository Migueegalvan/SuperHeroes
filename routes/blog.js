// routes/blog.js
import express from 'express';

const router = express.Router();

// Obtener la lista de blogs
router.get('/', (req, res) => {
  res.send('Lista de blogs');
});

// Obtener un blog específico por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Blog con ID: ${id}`);
});

// Crear un nuevo blog
router.post('/', (req, res) => {
  res.send('Nuevo blog creado');
});

export default router;
