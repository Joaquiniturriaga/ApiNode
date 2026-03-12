// Base de datos simulada en memoria
let saludos = [
  { id: 1, nombre: 'Joaquin', mensaje: 'Hola Joaquin!' },
  { id: 2, nombre: 'Profe',   mensaje: 'Hola Profe!'   }
];

// GET /api/saludo
exports.getAll = (req, res) => {
  res.json(saludos);
};

// GET /api/saludo/:id
exports.getById = (req, res) => {
  const item = saludos.find(s => s.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'No encontrado' });
  res.json(item);
};

// POST /api/saludo
exports.create = (req, res) => {
  const { nombre } = req.body;
  if (!nombre) return res.status(400).json({ error: 'Falta el campo nombre' });

  const nuevo = {
    id: saludos.length + 1,
    nombre,
    mensaje: `Hola, ${nombre}!`
  };
  saludos.push(nuevo);
  res.status(201).json(nuevo);
};

// PUT /api/saludo/:id
exports.update = (req, res) => {
  const index = saludos.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'No encontrado' });

  const { nombre } = req.body;
  saludos[index] = { ...saludos[index], nombre, mensaje: `Hola, ${nombre}!` };
  res.json(saludos[index]);
};

// DELETE /api/saludo/:id
exports.remove = (req, res) => {
  const index = saludos.findIndex(s => s.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'No encontrado' });

  saludos.splice(index, 1);
  res.json({ mensaje: 'Eliminado correctamente' });
};