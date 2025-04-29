const express = require('express');
const app = express();
require('dotenv').config();

const produtoRoutes = require('./routes/produtoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello there! You are most welcome, General Kenobi!');
});

app.use('/produtos', produtoRoutes);
app.use('/clientes', clienteRoutes);

app.use(errorMiddleware);

module.exports = app;
