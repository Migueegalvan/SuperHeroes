import * as superheroesService from '../services/superheroesService.mjs';

// Obtener todos los superhéroes y renderizar el dashboard
export const obtenerTodosLosSuperheroesController = (req, res) => {
  const heroes = superheroesService.obtenerTodosLosSuperheroes();
  res.render('dashboard', { heroes, title: 'Dashboard de Superhéroes' });
};

// Renderizar el formulario para agregar un nuevo superhéroe
export const mostrarFormularioAgregarController = (req, res) => {
  res.render('addSuperhero', { title: 'Agregar Superhéroe' });
};

// Agregar un nuevo superhéroe
export const agregarSuperheroeController = (req, res) => {
  const nuevoHeroe = superheroesService.agregarSuperheroe(req.body);
  res.redirect('/heroes');
};

// Renderizar el formulario para editar un superhéroe
export const mostrarFormularioEditarController = (req, res) => {
  const { id } = req.params;
  const heroe = superheroesService.obtenerSuperheroePorId(parseInt(id));
  if (heroe) {
    res.render('editSuperhero', { heroe, title: 'Editar Superhéroe' });
  } else {
    res.status(404).send('Superhéroe no encontrado');
  }
};

// Editar un superhéroe existente
export const editarSuperheroeController = (req, res) => {
  const { id } = req.params;
  const datosActualizados = req.body;
  superheroesService.editarSuperheroe(parseInt(id), datosActualizados);
  res.redirect('/heroes');
};

// Eliminar un superhéroe
export const eliminarSuperheroeController = (req, res) => {
  const { id } = req.params;
  superheroesService.eliminarSuperheroe(parseInt(id));
  res.redirect('/heroes');
};
