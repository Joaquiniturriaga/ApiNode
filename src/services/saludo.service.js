let saludos = [
  { id: 1, nombre: 'Joaquin', mensaje: 'Hola Joaquin!' },
  { id: 2, nombre: 'Profe',   mensaje: 'Hola Profe!'   }
];

exports.getAll = () => {
  return saludos;
};

exports.getById = (id) => {
  return saludos.find(s => s.id === parseInt(id));
};

exports.create = (nombre) => {
  const nuevo = {
    id: saludos.length + 1,
    nombre,
    mensaje: `Hola, ${nombre}!`
  };
  saludos.push(nuevo);
  return nuevo;
};

exports.update = (id, nombre) => {
  const index = saludos.findIndex(s => s.id === parseInt(id));
  if (index === -1) return null;
  saludos[index] = { ...saludos[index], nombre, mensaje: `Hola, ${nombre}!` };
  return saludos[index];
};

exports.remove = (id) => {
  const index = saludos.findIndex(s => s.id === parseInt(id));
  if (index === -1) return false;
  saludos.splice(index, 1);
  return true;
};