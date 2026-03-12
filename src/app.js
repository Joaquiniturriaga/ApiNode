const express = require('express');
const saludoRoutes = require('./routes/saludo.routes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', mensaje: 'API activa' });
});

app.use('/api/saludo', saludoRoutes);

module.exports = app;