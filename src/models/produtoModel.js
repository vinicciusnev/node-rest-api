const db = require('../config/database');

exports.findAll = async () => {
    const [rows] = await db.query('SELECT * FROM produtos');
    return rows;
};

exports.findByName = async (nome) => {
    const search = `%${nome}%`;
    const [rows] = await db.query('SELECT * FROM produtos WHERE nome LIKE ?', [search]);
    return rows;
};

exports.create = async (nome, preco) => {
    const [result] = await db.query('INSERT INTO produtos (nome, preco) VALUES (?, ?)', [nome, preco]);
    return { id: result.insertId, nome, preco };
};
