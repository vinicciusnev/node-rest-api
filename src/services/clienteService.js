const Cliente = require('../models/clienteModel');

exports.listarClientes = async () => {
    return await Cliente.findAll();
};

exports.buscarClientePorNome = async (nome) => {
    return await Cliente.findByName(nome);
};

exports.criarCliente = async (dados) => {
    const { nome, email } = dados;
    return await Cliente.create(nome, email);
};