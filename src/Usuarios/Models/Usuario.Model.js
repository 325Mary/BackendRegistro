const pool = require('../../config/Database');

async function insertUser(user) {
    const sql = `INSERT INTO users (email, identificacion, password, name) VALUES (?, ?, ?, ?)`;
    const [result] = await pool.execute(sql, [user.email, user.identificacion, user.password, user.name]);
    return result.insertId;
}

async function findUserByEmail(email) {
    const sql = `SELECT * FROM users WHERE email = ?`;
    const [rows] = await pool.execute(sql, [email]);
    return rows[0]; 
}

async function updateUser(id, updatedData) {
    const sql = `UPDATE users SET name = ?, identificacion = ?, email = ?, updated_at = NOW() WHERE id = ?`;
    const [result] = await pool.execute(sql, [
        updatedData.name,
        updatedData.identificacion,
        updatedData.email,
        id
    ]);
    return result.affectedRows > 0;
}

async function updatePassword(id, newPassword) {
    const sql = `UPDATE users SET password = ? WHERE id = ?`;
    const [result] = await pool.execute(sql, [newPassword, id]);
    return result.affectedRows > 0;
}

async function listUsers() {
    const sql = `SELECT id, identificacion, email, name, created_at FROM users ORDER BY name ASC`;
    const [rows] = await pool.execute(sql);
    return rows;
}

async function deleteUser(id) {
    const sql = `DELETE FROM users WHERE id = ?`;
    const [result] = await pool.execute(sql, [id]);
    return result.affectedRows > 0;
}

module.exports = {
    insertUser,
    findUserByEmail,
    updateUser,
    updatePassword,
    listUsers,
    deleteUser
};
