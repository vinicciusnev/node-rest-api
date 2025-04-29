const { body, validationResult } = require('express-validator');

exports.validarProduto = [
    body('nome').notEmpty().withMessage('Nome é obrigatório'),
    body('preco').isFloat({ gt: 0 }).withMessage('Preço deve ser maior que 0'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

exports.validarCliente = [
    body('nome').notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
