const produtoService = require('../services/produtoService');

exports.getProdutos = async (req, res, next) => {
    try {
        const produtos = await produtoService.listarProdutos();
        res.status(200).json(produtos);
    } catch (error) {
        next(error);
    }
};

exports.getProdutoPorNome = async (req, res, next) => {
    try {
        const { nome } = req.query;
        if (!nome) {
            return res.status(400).json({ error: 'Nome é obrigatório para buscar o produto' });
        }

        const produtos = await produtoService.buscarProdutoPorNome(nome);
        res.status(200).json(produtos);
    } catch (error) {
        next(error);
    }
};

exports.createProduto = async (req, res, next) => {
    try {
        const produto = await produtoService.criarProduto(req.body);
        res.status(201).json(produto);
    } catch (error) {
        next(error);
    }
};