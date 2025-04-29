const Produto = require('../models/produtoModel');

exports.listarProdutos = async () => {
    return await Produto.findAll();
};

exports.buscarProdutoPorNome = async (nome) => {
    return await Produto.findByName(nome);
};

exports.criarProduto = async (dados) => {
    const { nome, preco } = dados;
    return await Produto.create(nome, preco);
};
