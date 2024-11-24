// services/superheroesService.mjs

let superheroes = [
    {
      id: 1,
      nombreSuperheroe: 'Spider-Man',
      nombreReal: 'Peter Parker',
      edad: 25,
      planetaOrigen: 'Tierra',
      debilidad: 'Radiación gamma'
    },
    {
      id: 2,
      nombreSuperheroe: 'Iron Man',
      nombreReal: 'Tony Stark',
      edad: 45,
      planetaOrigen: 'Tierra',
      debilidad: 'Nada'
    },
    {
      id: 3,
      nombreSuperheroe: 'Thor',
      nombreReal: 'Thor Odinson',
      edad: 1500,
      planetaOrigen: 'Asgard',
      debilidad: 'No tiene'
    }
  ];
  
  // Obtener todos los superhéroes
  export const obtenerTodosLosSuperheroes = () => {
    return superheroes;
  };
  
  // Obtener un superhéroe por ID
  export const obtenerSuperheroePorId = (id) => {
    return superheroes.find(hero => hero.id === id);
  };
  
  // Agregar un nuevo superhéroe
  export const agregarSuperheroe = (datos) => {
    const nuevoHeroe = {
      id: superheroes.length > 0 ? superheroes[superheroes.length - 1].id + 1 : 1,
      ...datos
    };
    superheroes.push(nuevoHeroe);
    return nuevoHeroe;
  };
  
  // Editar un superhéroe existente
  export const editarSuperheroe = (id, datos) => {
    const index = superheroes.findIndex(hero => hero.id === id);
    if (index !== -1) {
      superheroes[index] = { ...superheroes[index], ...datos };
      return superheroes[index];
    }
    return null;
  };
  
  // Eliminar un superhéroe
  export const eliminarSuperheroe = (id) => {
    const index = superheroes.findIndex(hero => hero.id === id);
    if (index !== -1) {
      superheroes.splice(index, 1);
      return true;
    }
    return false;
  };
  