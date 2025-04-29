const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const { validarCliente } = require('../middlewares/validationMiddleware');

router.get('/', clienteController.getClientes);
router.get('/buscar', clienteController.getClientePorNome);
router.post('/', validarCliente, clienteController.createCliente);


module.exports = router;
