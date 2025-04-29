const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const { validarProduto } = require('../middlewares/validationMiddleware');

router.get('/', produtoController.getProdutos);
router.get('/buscar', produtoController.getProdutoPorNome);
router.post('/', validarProduto, produtoController.createProduto);

module.exports = router;