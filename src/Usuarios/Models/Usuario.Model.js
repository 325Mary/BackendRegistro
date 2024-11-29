const pool = require('../../config/Database');

async function insertUser(user) {
    const sql = `INSERT INTO users (email, password, name) VALUES (?, ?, ?)`;
    const [result] = await pool.execute(sql, [user.email, user.password, user.name]);
    return result.insertId;
}

async function findUserByEmail(email) {
    const sql = `SELECT * FROM users WHERE email = ?`;
    const [rows] = await pool.execute(sql, [email]);
    return rows[0];
}

async function updateUser(id, updatedData) {
    const sql = `UPDATE users SET name = ? WHERE id = ?`;
    const [result] = await pool.execute(sql, [updatedData.name, id]);
    return result.affectedRows > 0; }

async function updatePassword(id, newPassword) {
    const sql = `UPDATE users SET password = ? WHERE id = ?`;
    const [result] = await pool.execute(sql, [newPassword, id]);
    return result.affectedRows > 0;
}
async function listUsers() {
    const sql = `SELECT id, email, name, created_at FROM users ORDER BY name ASC`;
    const [rows] = await pool.execute(sql);
    return rows;
}

module.exports = {
    insertUser,
    findUserByEmail,
    updateUser,
    updatePassword,
    listUsers
};
