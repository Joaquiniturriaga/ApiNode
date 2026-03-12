const service = require('../services/saludo.service');

exports.getAll = (req, res) => {
  res.json(service.getAll());
};

exports.getById = (req, res) => {
  const item = service.getById(req.params.id);
  if (!item) return res.status(404).json({ error: 'No encontrado' });
  res.json(item);
};

exports.create = (req, res) => {
  const { nombre } = req.body;
  if (!nombre) return res.status(400).json({ error: 'Falta el campo nombre' });
  res.status(201).json(service.create(nombre));
};

exports.update = (req, res) => {
  const { nombre } = req.body;
  const item = service.update(req.params.id, nombre);
  if (!item) return res.status(404).json({ error: 'No encontrado' });
  res.json(item);
};

exports.remove = (req, res) => {
  const ok = service.remove(req.params.id);
  if (!ok) return res.status(404).json({ error: 'No encontrado' });
  res.json({ mensaje: 'Eliminado correctamente' });
};