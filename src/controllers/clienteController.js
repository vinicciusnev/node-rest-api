const clienteService = require('../services/clienteService');

exports.getClientes = async (req, res, next) => {
    try {
        const clientes = await clienteService.listarClientes();
        res.status(200).json(clientes);
    } catch (error) {
        next(error);
    }
};

exports.getClientePorNome = async (req, res, next) => {
    try {
        const { nome } = req.query;
        if (!nome) {
            return res.status(400).json({ error: 'Nome é obrigatório para buscar o cliente' });
        }

        const clientes = await clienteService.buscarClientePorNome(nome);
        res.status(200).json(clientes);
    } catch (error) {
        next(error);
    }
};

exports.createCliente = async (req, res, next) => {
    try {
        const cliente = await clienteService.criarCliente(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        next(error);
    }
};