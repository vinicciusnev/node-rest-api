const db = require('../config/database');

exports.findAll = async () => {
    const [rows] = await db.query('SELECT * FROM clientes');
    return rows;
};

exports.findByName = async (nome) => {
    const search = `%${nome}%`;
    const [rows] = await db.query('SELECT * FROM clientes WHERE nome LIKE ?', [search]);
    return rows;
};

exports.create = async (nome, email) => {
    const [result] = await db.query('INSERT INTO clientes (nome, email) VALUES (?, ?)', [nome, email]);
    return { id: result.insertId, nome, email };
};
